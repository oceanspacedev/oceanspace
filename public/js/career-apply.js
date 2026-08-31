window.initCareerApply = () => {
  const api = window.OceanSpaceCareerApi;
  const titleNode = document.getElementById('apply-page-title');
  const summaryNode = document.getElementById('apply-page-summary');
  const metaNode = document.getElementById('apply-page-meta');
  const loadingNode = document.getElementById('apply-page-loading');
  const emptyNode = document.getElementById('apply-page-empty');
  const errorNode = document.getElementById('apply-page-error');
  const contentNode = document.getElementById('apply-page-content');
  const detailsNode = document.getElementById('apply-page-details');
  const prepWrapNode = document.getElementById('apply-page-prep-wrap');
  const descriptionNode = document.getElementById('apply-page-description');
  const requirementsNode = document.getElementById('apply-page-requirements');
  const prepNode = document.getElementById('apply-page-prep');
  const formNode = document.getElementById('apply-form');
  const formAlerts = document.getElementById('form-alerts');
  const notifyMotionRefresh = () => {
    window.dispatchEvent(new CustomEvent('oceanspace:motion-refresh'));
  };

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('job');
  const FILE_VALIDATIONS = {
    photo: {
      accept: '.jpg,.jpeg,.png,.webp',
      extensions: ['jpg', 'jpeg', 'png', 'webp'],
      maxSizeBytes: 5 * 1024 * 1024,
      note: 'JPG, PNG, WEBP · maks. 5 MB',
      invalidTypeMessage: 'Photo diri terbaru harus berupa gambar.',
      invalidFormatMessage: 'Photo diri terbaru harus berformat jpg, jpeg, png, atau webp.',
      maxSizeMessage: 'Ukuran photo diri terbaru maksimal 5 MB.',
    },
    resume: {
      accept: '.pdf,.doc,.docx',
      extensions: ['pdf', 'doc', 'docx'],
      maxSizeBytes: 5 * 1024 * 1024,
      note: 'PDF, DOC, DOCX · maks. 5 MB',
      invalidFormatMessage: 'File CV/Resume harus berformat pdf, doc, atau docx.',
      maxSizeMessage: 'Ukuran file CV/Resume maksimal 5 MB.',
    }
  };
  const getLang = () => (document.documentElement.lang || localStorage.getItem('oceanspace_language') || 'id').startsWith('en') ? 'en' : 'id';

  const formatDate = (dateString) => {
    const isEn = getLang() === 'en';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(isEn ? 'en-US' : 'id-ID', options);
  };

  const escapeHtml = (unsafe) => {
    return (unsafe || '').toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  const renderTextareaBlocks = (text, options = {}) => {
    const value = (text || '').trim();
    if (!value) {
      return options.emptyHtml || '<p>Informasi belum tersedia.</p>';
    }

    const blocks = value
      .split(/\n\s*\n/)
      .map((block) => block.trim())
      .filter(Boolean);

    const bulletRe = /^([-*•]|\d+\.)\s*/;

    return blocks.map((block) => {
      const lines = block
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);

      const bulletIndexes = lines
        .map((line, index) => (bulletRe.test(line) ? index : -1))
        .filter((index) => index >= 0);

      // Intro paragraph + bullet list (common in API job descriptions)
      if (bulletIndexes.length >= 2) {
        const listStart = bulletIndexes[0];
        const introLines = lines.slice(0, listStart);
        const listLines = lines.slice(listStart).filter((line) => bulletRe.test(line));
        const introHtml = introLines.length
          ? `<p class="${options.paragraphClass || ''}">${escapeHtml(introLines.join(' '))}</p>`
          : '';
        const items = listLines
          .map((line) => line.replace(bulletRe, '').trim())
          .map((line) => `<li>${escapeHtml(line)}</li>`)
          .join('');

        return `${introHtml}<ul class="${options.listClass || 'space-y-3'}">${items}</ul>`;
      }

      const listLike = lines.length > 1 && lines.every((line) => bulletRe.test(line));

      if (listLike) {
        const items = lines
          .map((line) => line.replace(bulletRe, '').trim())
          .map((line) => `<li>${escapeHtml(line)}</li>`)
          .join('');

        return `<ul class="${options.listClass || 'space-y-3'}">${items}</ul>`;
      }

      if (options.lineList && lines.length > 1) {
        const items = lines
          .map((line) => `<li>${escapeHtml(line)}</li>`)
          .join('');

        return `<ul class="${options.listClass || 'space-y-3'}">${items}</ul>`;
      }

      return `<p class="${options.paragraphClass || ''}">${escapeHtml(lines.join(' '))}</p>`;
    }).join('');
  };

  const setVisibility = (node, visible) => {
    if (!node) {
      return;
    }

    node.classList.toggle('hidden', !visible);
    node.setAttribute('aria-hidden', visible ? 'false' : 'true');
  };

  const setState = (state) => {
    setVisibility(loadingNode, state === 'loading');
    setVisibility(emptyNode, state === 'empty');
    setVisibility(errorNode, state === 'error');
    setVisibility(contentNode, state === 'content');
    setVisibility(detailsNode, state === 'content');
    requestAnimationFrame(() => {
      notifyMotionRefresh();
    });
  };

  const clearErrors = () => {
    formNode.querySelectorAll('[id^="error-"]').forEach((node) => {
      node.classList.add('hidden');
      node.textContent = '';
    });
    formNode.querySelectorAll('.border-red-500').forEach((node) => {
      node.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
    });
    formNode.querySelectorAll('.apply-file--error').forEach((node) => {
      node.classList.remove('apply-file--error');
    });
    formAlerts.innerHTML = '';
  };

  const setFieldError = (fieldName, message) => {
    const errorEl = document.getElementById(`error-${fieldName}`);
    const inputEl = formNode.querySelector(`[name="${fieldName}"]`);

    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }

    if (inputEl) {
      inputEl.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
      inputEl.closest('.apply-file')?.classList.add('apply-file--error');
    }
  };

  const clearFieldError = (fieldName) => {
    const errorEl = document.getElementById(`error-${fieldName}`);
    const inputEl = formNode.querySelector(`[name="${fieldName}"]`);

    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
    }

    if (inputEl) {
      inputEl.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
      inputEl.closest('.apply-file')?.classList.remove('apply-file--error');
    }
  };

  const showErrors = (errors) => {
    Object.keys(errors).forEach((key) => {
      const message = Array.isArray(errors[key]) ? errors[key][0] : errors[key];
      setFieldError(key, message);
    });
  };

  const getFileValidation = (fieldName) => FILE_VALIDATIONS[fieldName] || null;

  const validateFileInput = (inputEl) => {
    const rule = getFileValidation(inputEl?.name);

    if (!inputEl || !rule) {
      return true;
    }

    const file = inputEl.files && inputEl.files[0];

    clearFieldError(inputEl.name);

    if (!file) {
      return true;
    }

    const extension = ((file.name || '').split('.').pop() || '').toLowerCase();

    if (inputEl.name === 'photo' && file.type && !file.type.startsWith('image/')) {
      setFieldError(inputEl.name, rule.invalidTypeMessage);
      return false;
    }

    if (!rule.extensions.includes(extension)) {
      setFieldError(inputEl.name, rule.invalidFormatMessage);
      return false;
    }

    if (file.size > rule.maxSizeBytes) {
      setFieldError(inputEl.name, rule.maxSizeMessage);
      return false;
    }

    return true;
  };

  const validateClientFiles = () => {
    return Object.keys(FILE_VALIDATIONS).every((fieldName) => {
      const inputEl = formNode.querySelector(`input[name="${fieldName}"]`);

      if (!inputEl) {
        return true;
      }

      return validateFileInput(inputEl);
    });
  };

  const formatFileSize = (bytes) => {
    if (!Number.isFinite(bytes) || bytes <= 0) {
      return '';
    }

    if (bytes < 1024 * 1024) {
      return `${Math.max(1, Math.round(bytes / 1024))} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const updateFileFieldUI = (inputEl) => {
    const shell = inputEl?.closest('.apply-file');
    if (!shell) {
      return;
    }

    const file = inputEl.files && inputEl.files[0];
    const metaNode = shell.querySelector('[data-file-meta]');
    const actionNode = shell.querySelector('[data-file-action]');
    const emptyMeta = metaNode?.dataset.emptyMeta || '';
    const isEn = getLang() === 'en';

    if (!file) {
      shell.classList.remove('has-file');
      if (metaNode) {
        metaNode.textContent = emptyMeta;
      }
      if (actionNode) {
        actionNode.textContent = isEn ? 'Browse' : 'Pilih';
      }
      return;
    }

    shell.classList.add('has-file');
    if (metaNode) {
      const size = formatFileSize(file.size);
      metaNode.textContent = size ? `${file.name} · ${size}` : file.name;
    }
    if (actionNode) {
      actionNode.textContent = isEn ? 'Change' : 'Ganti';
    }
  };

  const attachFileValidationListeners = () => {
    Object.keys(FILE_VALIDATIONS).forEach((fieldName) => {
      const inputEl = formNode.querySelector(`input[name="${fieldName}"]`);

      if (!inputEl) {
        return;
      }

      inputEl.addEventListener('change', () => {
        updateFileFieldUI(inputEl);
        validateFileInput(inputEl);
      });

      updateFileFieldUI(inputEl);
    });
  };

  const getFileFieldMarkup = (field, options) => {
    const { fieldLabel, optionalNote, isRequired, acceptTypes, fileFormatNote } = options;
    const isEn = getLang() === 'en';

    return `
      <div class="apply-file" data-file-field="${escapeHtml(field.name)}">
        <label class="apply-file__control">
          <input
            id="field-${escapeHtml(field.name)}"
            type="file"
            name="${escapeHtml(field.name)}"
            class="apply-file__input"
            ${isRequired}
            accept="${acceptTypes}"
          >
          <span class="apply-file__body">
            <span class="apply-file__title">${escapeHtml(fieldLabel)} ${optionalNote}</span>
            <span class="apply-file__meta" data-file-meta data-empty-meta="${escapeHtml(fileFormatNote)}">${escapeHtml(fileFormatNote)}</span>
          </span>
          <span class="apply-file__action" data-file-action>${isEn ? 'Browse' : 'Pilih'}</span>
        </label>
      </div>
      <p class="mt-2 hidden text-xs text-red-500" id="error-${escapeHtml(field.name)}"></p>
    `;
  };

  const renderRequirements = (text) => {
    requirementsNode.innerHTML = renderTextareaBlocks(text, {
      emptyHtml: `<p>${getLang() === 'en' ? 'Qualifications not yet available.' : 'Informasi kualifikasi belum tersedia.'}</p>`,
      lineList: true,
      listClass: 'space-y-2.5 [&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:leading-7 [&_li]:text-[#556070] dark:[&_li]:text-slate-300 [&_li]:before:mt-2 [&_li]:before:inline-flex [&_li]:before:h-2 [&_li]:before:w-2 [&_li]:before:shrink-0 [&_li]:before:rounded-full [&_li]:before:bg-[#2563eb] [&_li]:before:content-[""]',
      paragraphClass: 'text-[15px] leading-7 text-[#556070] dark:text-slate-300'
    });
  };

  const renderMeta = (job) => {
    const isEn = getLang() === 'en';
    metaNode.innerHTML = `
      <div class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-800 dark:bg-[#131824]">
        <p class="font-mono text-[0.64rem] uppercase tracking-widest text-slate-500 dark:text-slate-400">${isEn ? 'Location' : 'Lokasi'}</p>
        <p class="mt-2 text-sm font-semibold text-[#171a22] dark:text-white">${escapeHtml(job.location)}</p>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-[#131824]">
        <p class="font-mono text-[0.64rem] uppercase tracking-widest text-slate-500 dark:text-slate-400">${isEn ? 'Closing Date' : 'Penutupan'}</p>
        <p class="mt-2 text-sm font-semibold text-[#171a22] dark:text-white">${formatDate(job.closing_date)}</p>
      </div>
    `;
  };

  const renderPrep = (job) => {
    const isEn = getLang() === 'en';
    const fields = job.application_form || [];
    const prepItems = [];

    if (fields.some((field) => field.name === 'photo')) {
      prepItems.push(isEn ? 'Recent passport photo' : 'Foto diri terbaru');
    }

    if (fields.some((field) => field.name === 'resume')) {
      prepItems.push('CV/Resume (PDF/DOC/DOCX)');
    }

    if (fields.some((field) => field.name === 'whatsapp_number' || field.name === 'active_phone')) {
      prepItems.push(isEn ? 'Active contact number' : 'Nomor kontak aktif');
    }

    if (fields.some((field) => field.name && field.name.startsWith('emergency_contact_'))) {
      prepItems.push(isEn ? 'Emergency contact' : 'Kontak darurat');
    }

    if (!prepItems.length) {
      if (prepWrapNode) {
        prepWrapNode.classList.add('hidden');
      }
      prepNode.innerHTML = '';
      return;
    }

    prepNode.innerHTML = prepItems.map((item) => `
      <li class="flex items-start gap-3 text-sm text-[#556070] dark:text-slate-300">
        <span aria-hidden="true" class="mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#2563eb]"></span>
        <span>${escapeHtml(item)}</span>
      </li>
    `).join('');
    if (prepWrapNode) {
      prepWrapNode.classList.remove('hidden');
    }
  };

  const getFieldGroup = (field) => {
    const isEn = getLang() === 'en';
    const groupMapId = {
      full_name: 'Data Diri',
      email: 'Data Diri',
      gender: 'Data Diri',
      birth_date: 'Data Diri',
      marital_status: 'Data Diri',
      address_ktp: 'Alamat',
      address_domicile: 'Alamat',
      whatsapp_number: 'Kontak',
      active_phone: 'Kontak',
      emergency_contact_name: 'Kontak Darurat',
      emergency_contact_relation: 'Kontak Darurat',
      emergency_contact_phone: 'Kontak Darurat',
      photo: 'Dokumen',
      resume: 'Dokumen',
    };

    const groupMapEn = {
      full_name: 'Personal Details',
      email: 'Personal Details',
      gender: 'Personal Details',
      birth_date: 'Personal Details',
      marital_status: 'Personal Details',
      address_ktp: 'Address',
      address_domicile: 'Address',
      whatsapp_number: 'Contact',
      active_phone: 'Contact',
      emergency_contact_name: 'Emergency Contact',
      emergency_contact_relation: 'Emergency Contact',
      emergency_contact_phone: 'Emergency Contact',
      photo: 'Documents',
      resume: 'Documents',
    };

    const map = isEn ? groupMapEn : groupMapId;
    return map[field.name] || (isEn ? 'Additional Information' : 'Informasi Tambahan');
  };

  const getFieldLabel = (field) => {
    const isEn = getLang() === 'en';
    if (field.name === 'photo') {
      return isEn ? 'Photo' : 'Foto diri';
    }

    if (field.name === 'resume') {
      return 'CV / Resume';
    }

    const enLabels = {
      full_name: 'Full Name',
      email: 'Email Address',
      gender: 'Gender',
      birth_date: 'Date of Birth',
      marital_status: 'Marital Status',
      address_ktp: 'ID Card Address (KTP)',
      address_domicile: 'Current Domicile Address',
      whatsapp_number: 'WhatsApp Number',
      active_phone: 'Active Phone Number',
      emergency_contact_name: 'Emergency Contact Name',
      emergency_contact_relation: 'Emergency Contact Relation',
      emergency_contact_phone: 'Emergency Contact Phone Number',
    };

    if (isEn && enLabels[field.name]) {
      return enLabels[field.name];
    }

    return field.label || field.name || 'Field';
  };

  const getFileFormatNote = (field) => {
    return getFileValidation(field.name)?.note || '';
  };

  const isUppercaseHeavyTitle = (value) => {
    const text = String(value || '').trim();
    if (!text) {
      return false;
    }

    const lettersOnly = text.replace(/[^A-Za-zÀ-ÿ]/g, '');
    if (!lettersOnly) {
      return false;
    }

    return lettersOnly === lettersOnly.toUpperCase();
  };

  const formatJobTitle = (value) => {
    const text = String(value || '').trim();
    if (!isUppercaseHeavyTitle(text)) {
      return text;
    }

    return text
      .toLowerCase()
      .replace(/(^|[^a-zà-ÿ])([a-zà-ÿ])/g, (_, boundary, letter) => boundary + letter.toUpperCase())
      .replace(/\b(Cv|Pdf|Doc|Docx)\b/g, (match) => match.toUpperCase());
  };

  const renderFormStatus = (tone, title, message) => {
    const tones = {
      warning: {
        panelClass: 'border-orange-100 bg-orange-50 dark:bg-orange-950/30 dark:border-orange-900/50',
        textClass: 'text-orange-700 dark:text-orange-300'
      },
      error: {
        panelClass: 'border-red-100 bg-red-50 dark:bg-red-950/30 dark:border-red-900/50',
        textClass: 'text-red-700 dark:text-red-300'
      }
    };

    const config = tones[tone] || tones.error;

    return `
      <div class="mb-5 border ${config.panelClass} p-4 sm:p-5 rounded-lg">
        <p class="lc-eyebrow ${config.textClass}">${escapeHtml(title)}</p>
        <p class="mt-2 text-sm leading-7 ${config.textClass}">${escapeHtml(message)}</p>
      </div>
    `;
  };

  const renderForm = (job) => {
    formNode.innerHTML = '';
    formNode.setAttribute('data-slug', job.slug);
    const isEn = getLang() === 'en';
    const groupOrder = isEn
      ? ['Personal Details', 'Address', 'Contact', 'Emergency Contact', 'Documents', 'Additional Information']
      : ['Data Diri', 'Alamat', 'Kontak', 'Kontak Darurat', 'Dokumen', 'Informasi Tambahan'];
    const groups = new Map();

    (job.application_form || []).forEach((field) => {
      const groupName = getFieldGroup(field);
      if (!groups.has(groupName)) {
        groups.set(groupName, []);
      }
      groups.get(groupName).push(field);
    });

    groupOrder.filter((groupName) => groups.has(groupName)).forEach((groupName) => {
      const section = document.createElement('section');
      section.className = 'apply-form-section';
      section.innerHTML = `
        <p class="apply-form-section__label">${groupName}</p>
      `;

      const fieldsGrid = document.createElement('div');
      fieldsGrid.className = 'apply-fields';

      groups.get(groupName).forEach((field) => {
        const wrapper = document.createElement('div');
        const isRequired = field.required ? 'required' : '';
        const optionalNote = field.required
          ? '<span class="text-red-500">*</span>'
          : `<span class="text-black/40 dark:text-slate-500 text-xs font-normal ml-1">(${isEn ? 'Optional' : 'Opsional'})</span>`;
        const fieldLabel = getFieldLabel(field);
        const labelClass = 'block text-sm font-medium text-[#243041] dark:text-slate-200 mb-2';
        const inputClass = 'apply-input';
        const isLongField = field.type === 'textarea' || field.name === 'address_ktp' || field.name === 'address_domicile';
        const placeholders = isEn ? {
          full_name: 'Full name as on identity card',
          email: 'name@email.com',
          whatsapp_number: '08xxxxxxxxxx',
          active_phone: '08xxxxxxxxxx',
          emergency_contact_name: 'Emergency contact name',
          emergency_contact_relation: 'e.g. Parent / Spouse',
          emergency_contact_phone: '08xxxxxxxxxx',
        } : {
          full_name: 'Nama lengkap sesuai identitas',
          email: 'nama@email.com',
          whatsapp_number: '08xxxxxxxxxx',
          active_phone: '08xxxxxxxxxx',
          emergency_contact_name: 'Nama kontak darurat',
          emergency_contact_relation: 'Contoh: Orang tua',
          emergency_contact_phone: '08xxxxxxxxxx',
        };

        if (field.type === 'select') {
          const selectPlaceholder = isEn ? `Select ${escapeHtml(fieldLabel)}` : `Pilih ${escapeHtml(field.label || fieldLabel)}`;
          const optionsHtml = [`<option value="">${selectPlaceholder}</option>`]
            .concat((field.options || []).map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`))
            .join('');
          wrapper.innerHTML = `
            <label class="${labelClass}">${escapeHtml(fieldLabel)} ${optionalNote}</label>
            <select name="${escapeHtml(field.name)}" class="${inputClass}" ${isRequired}>
              ${optionsHtml}
            </select>
            <p class="mt-1 hidden text-xs text-red-500" id="error-${escapeHtml(field.name)}"></p>
          `;
        } else if (field.type === 'textarea') {
          wrapper.innerHTML = `
            <label class="${labelClass}">${escapeHtml(fieldLabel)} ${optionalNote}</label>
            <textarea name="${escapeHtml(field.name)}" rows="4" class="${inputClass}" ${isRequired}></textarea>
            <p class="mt-1 hidden text-xs text-red-500" id="error-${escapeHtml(field.name)}"></p>
          `;
        } else if (field.type === 'file' || field.name === 'photo' || field.name === 'resume') {
          const fileValidation = getFileValidation(field.name);
          const acceptTypes = fileValidation ? fileValidation.accept : '.pdf,.doc,.docx,.jpg,.jpeg,.png,.webp';
          const fileFormatNote = getFileFormatNote(field);
          wrapper.innerHTML = getFileFieldMarkup(field, {
            fieldLabel,
            optionalNote,
            isRequired,
            acceptTypes,
            fileFormatNote,
          });
        } else if (field.type === 'date') {
          wrapper.innerHTML = `
            <label class="${labelClass}">${escapeHtml(fieldLabel)} ${optionalNote}</label>
            <input type="date" name="${escapeHtml(field.name)}" class="${inputClass}" ${isRequired}>
            <p class="mt-1 hidden text-xs text-red-500" id="error-${escapeHtml(field.name)}"></p>
          `;
        } else {
          let extraValidation = '';
          if (field.type === 'number' || field.type === 'tel' || field.name.includes('phone') || field.name.includes('number')) {
            extraValidation = 'inputmode="numeric" oninput="this.value = this.value.replace(/[^0-9]/g, \'\')"';
          }
          wrapper.innerHTML = `
            <label class="${labelClass}">${escapeHtml(fieldLabel)} ${optionalNote}</label>
            <input type="${escapeHtml(field.type)}" name="${escapeHtml(field.name)}" class="${inputClass}" ${isRequired} ${placeholders[field.name] ? `placeholder="${escapeHtml(placeholders[field.name])}"` : ''} ${extraValidation}>
            <p class="mt-1 hidden text-xs text-red-500" id="error-${escapeHtml(field.name)}"></p>
          `;
        }

        if (isLongField) {
          wrapper.classList.add('apply-field-span');
        }

        fieldsGrid.appendChild(wrapper);
      });

      section.appendChild(fieldsGrid);
      formNode.appendChild(section);
    });

    attachFileValidationListeners();

    const submitWrapper = document.createElement('div');
    submitWrapper.className = 'border-t border-black/10 dark:border-slate-800 pt-5';
    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.id = 'btn-submit';
    submitBtn.setAttribute('data-motion-cta', 'true');
    submitBtn.className = 'apply-submit';
    submitBtn.textContent = isEn ? 'Submit Application' : 'Kirim Lamaran';
    submitBtn.addEventListener('click', (e) => {
      if (formNode.checkValidity()) {
        handleSubmit(e);
      } else {
        formNode.reportValidity();
      }
    });
    submitWrapper.appendChild(submitBtn);
    formNode.appendChild(submitWrapper);
  };

  const renderSuccess = (payload) => {
    const isEn = getLang() === 'en';
    formNode.innerHTML = `
      <div data-motion-reveal="panel" class="border border-green-100 bg-green-50 p-8 sm:p-10 dark:border-green-900/50 dark:bg-green-950/30">
        <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p class="lc-eyebrow text-green-700 dark:text-green-400">${isEn ? 'Application Submitted' : 'Lamaran Terkirim'}</p>
            <h3 class="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-green-800 dark:text-green-300">${isEn ? 'Application Sent Successfully!' : 'Lamaran Berhasil Terkirim!'}</h3>
            <p class="mt-3 max-w-[34rem] text-[15px] leading-7 text-green-700 dark:text-green-300">${isEn ? 'Thank you' : 'Terima kasih'}, <strong>${escapeHtml(payload.data?.applicant_name || (isEn ? 'Candidate' : 'Kandidat'))}</strong>. ${isEn ? 'Your application has been received and will be reviewed by our team.' : 'Lamaran Anda sudah diterima dan akan ditinjau oleh tim kami.'}</p>
          </div>
          <div class="flex flex-wrap gap-3">
            <a href="/career" data-motion-cta="true" class="button-primary sm:w-auto">${isEn ? 'View other positions' : 'Lihat posisi lainnya'}</a>
            <a href="/contact" data-motion-cta="true" class="button-secondary sm:w-auto">${isEn ? 'Contact us' : 'Hubungi tim korporat'}</a>
          </div>
        </div>
      </div>
    `;
    notifyMotionRefresh();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    clearErrors();
    const isEn = getLang() === 'en';

    if (!validateClientFiles()) {
      formAlerts.innerHTML = renderFormStatus(
        'warning',
        isEn ? 'Check Uploaded Files' : 'Periksa Form',
        isEn ? 'Please check the uploaded files. Format and size must match requirements before submitting.' : 'Periksa kembali file yang diunggah. Format dan ukuran file harus sesuai ketentuan sebelum lamaran dikirim.'
      );
      return;
    }

    const submitBtn = document.getElementById('btn-submit');
    const formData = new FormData(formNode);
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = isEn ? 'Processing...' : 'Memproses...';

    try {
      const payload = await api.applyToJob(slug, formData);
      renderSuccess(payload);
    } catch (error) {
      if (error.status === 422 && error.payload?.errors) {
        showErrors(error.payload.errors);
        formAlerts.innerHTML = renderFormStatus(
          'warning',
          isEn ? 'Check Form' : 'Periksa Form',
          error.payload.message || (isEn ? 'Please check your form input.' : 'Mohon periksa kembali isian formulir Anda.')
        );
      } else {
        formAlerts.innerHTML = renderFormStatus(
          'error',
          isEn ? 'Something went wrong' : 'Terjadi Kendala',
          isEn ? 'A system error occurred. Please try again in a few moments.' : 'Terjadi kesalahan sistem. Lamaran gagal dikirim. Silakan coba lagi beberapa saat lagi.'
        );
      }
    } finally {
      if (document.getElementById('btn-submit')) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    }
  };

  let cachedJob = window.__oceanSpaceCachedJobDetail || null;

  const renderJob = (job) => {
    if (!job) return;
    cachedJob = job;
    window.__oceanSpaceCachedJobDetail = job;

    const isEn = getLang() === 'en';
    document.title = isEn ? `Application: ${job.title} | Ocean Space` : `Lamaran: ${job.title} | Ocean Space`;
    titleNode.textContent = formatJobTitle(job.title);
    summaryNode.textContent = isEn
      ? 'Review the role description, qualifications, and submit your application below.'
      : 'Baca konteks peran, lalu isi lamaran jika cocok.';

    descriptionNode.innerHTML = renderTextareaBlocks(job.description, {
      emptyHtml: `<p>${isEn ? 'Description not yet available.' : 'Informasi deskripsi belum tersedia.'}</p>`,
      paragraphClass: 'text-[15px] leading-7 text-[#556070] dark:text-slate-300'
    });

    renderRequirements(job.requirements);
    renderPrep(job);
    renderMeta(job);
    renderForm(job);
    formNode.onsubmit = handleSubmit;
    setState('content');
  };

  const handleLangChange = () => {
    if (cachedJob) {
      renderJob(cachedJob);
    }
  };

  window.addEventListener('oceanspace:languagechange', handleLangChange);

  const runId = (window.__oceanSpaceApplyRunId || 0) + 1;
  window.__oceanSpaceApplyRunId = runId;

  const init = async () => {
    if (!slug) {
      setState('empty');
      return;
    }

    if (cachedJob && (cachedJob.slug === slug || !cachedJob.slug)) {
      renderJob(cachedJob);
      return;
    }

    if (!api || typeof api.getJobDetail !== 'function') {
      setState('error');
      return;
    }

    try {
      const payload = await api.getJobDetail(slug);
      if (runId !== window.__oceanSpaceApplyRunId) {
        return;
      }
      renderJob(payload.data);
    } catch (error) {
      if (runId !== window.__oceanSpaceApplyRunId) {
        return;
      }
      setState('error');
    }
  };

  if (!cachedJob) {
    setState('loading');
  }
  init();
};
