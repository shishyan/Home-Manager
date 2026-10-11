with open('styles.css', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '.zen-sprint-header {'
end_marker = '/* PRINT & PDF STYLES */'

idx_start = content.find(start_marker)
idx_end = content.find(end_marker)

if idx_start == -1 or idx_end == -1:
    print(f"Error: markers not found! start={idx_start}, end={idx_end}")
    exit(1)

new_styles = '''.zen-sprint-header {
  background: #ffffff !important;
  border: 1px solid rgba(15, 23, 42, 0.08) !important;
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03) !important;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.zen-header-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.zen-header-titles {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.zen-title {
  font-size: 1.35rem;
  font-weight: 750;
  color: #0f172a !important;
  margin: 0;
  letter-spacing: -0.01em;
}

.zen-subtitle {
  font-size: 0.85rem;
  color: #64748b !important;
  margin: 0;
}

.zen-subtitle span {
  color: #0d9488;
  font-weight: 600;
}

.zen-header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-zen-action {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.38rem 0.85rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s ease;
}

.btn-zen-action:hover {
  background: #f1f5f9;
  color: #0f172a;
  border-color: #cbd5e1;
}

/* Books Submenu Navigation (Clean horizontal tabs) */
.zen-books-navbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  padding-top: 0.75rem;
  border-top: 1px solid #f1f5f9;
}

.zen-book-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.38rem 0.85rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s ease;
}

.zen-book-pill:hover {
  background: #f1f5f9;
  color: #0f172a;
}

.zen-book-pill.active {
  background: linear-gradient(135deg, #0d9488 0%, #059669 45%, #7c3aed 100%) !important;
  color: #ffffff !important;
  border-color: transparent !important;
  font-weight: 650;
  box-shadow: 0 2px 8px rgba(13, 148, 136, 0.3);
}

.zen-book-pill.active i {
  color: #ffffff !important;
}

/* Zen Filter Bar */
.zen-filter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  background: #ffffff !important;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 10px;
  padding: 0.65rem 1rem;
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.02);
}

.zen-marks-pills {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  flex-wrap: wrap;
}

.zen-mark-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.28rem 0.65rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  font-size: 0.74rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s ease;
}

.zen-mark-btn:hover {
  background: #f1f5f9;
  color: #0f172a;
}

.zen-mark-btn.active {
  background: linear-gradient(135deg, #0d9488 0%, #059669 45%, #7c3aed 100%) !important;
  border-color: transparent !important;
  color: #ffffff !important;
  font-weight: 700;
  box-shadow: 0 1px 6px rgba(13, 148, 136, 0.3);
}

.zen-search-wrap {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.28rem 0.65rem;
  min-width: 240px;
}

.zen-search-icon {
  width: 14px;
  height: 14px;
  color: #0d9488;
}

.zen-search-input {
  border: none;
  background: transparent;
  outline: none;
  font-size: 0.8rem;
  color: #0f172a;
  width: 100%;
}

.zen-search-input::placeholder {
  color: #94a3b8;
}

/* Zen Question Cards */
.zen-questions-deck {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.board-question-card.zen-card {
  background: #ffffff !important;
  border: 1px solid rgba(15, 23, 42, 0.08) !important;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03) !important;
  transition: border-color 0.15s ease;
}

.board-question-card.zen-card:hover {
  border-color: rgba(13, 148, 136, 0.3) !important;
}

.board-question-card.zen-card.is-mastered {
  border-left: 3px solid #10b981 !important;
}

.zen-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  background: #fafbfc;
  border-bottom: 1px solid #f1f5f9;
  padding: 0.75rem 1.15rem;
  border-top-left-radius: 11px;
  border-top-right-radius: 11px;
}

.q-card-meta-line {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  color: #64748b;
  flex-wrap: wrap;
}

.q-meta-subject {
  color: #0d9488;
  font-weight: 700;
}

.q-meta-marks {
  font-weight: 700;
  color: #0f172a;
}

.q-meta-chapter {
  color: #475569;
}

.q-meta-prob {
  color: #b45309;
  font-weight: 600;
}

.q-meta-dot {
  color: #cbd5e1;
}

.btn-master-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.65rem;
  background: #f8fafc !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 5px;
  font-size: 0.72rem;
  font-weight: 600;
  color: #64748b !important;
  cursor: pointer;
  transition: all 0.15s ease;
}

.btn-master-toggle:hover {
  background: #ecfdf5 !important;
  border-color: #10b981 !important;
  color: #047857 !important;
}

.btn-master-toggle.mastered {
  background: #10b981 !important;
  border-color: #10b981 !important;
  color: #ffffff !important;
}

.zen-card-body {
  padding: 1.15rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.q-card-stem {
  color: #0f172a !important;
  font-size: 0.98rem;
  line-height: 1.6;
}

.q-card-stem .q-num {
  color: #0d9488 !important;
  font-weight: 750;
  margin-right: 0.35rem;
}

.q-card-diagram {
  background: #fafbfc;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

/* UNIFIED STUDY STRIP (Quiet, compact 1-line reference) */
.zen-study-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.6rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0.45rem 0.85rem;
  font-size: 0.76rem;
}

.study-strip-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
}

.strip-label {
  font-weight: 700;
  color: #475569;
}

.strip-value {
  color: #334155;
}

.strip-badge-repeat {
  background: #fef3c7;
  color: #92400e;
  font-size: 0.7rem;
  font-weight: 650;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
}

.strip-video {
  color: #7c3aed !important;
  text-decoration: none !important;
  font-weight: 600;
  margin-left: auto;
}

.strip-video:hover {
  text-decoration: underline !important;
  color: #5b21b6 !important;
}

.strip-ext {
  width: 12px;
  height: 12px;
}

/* Accordion Solution */
.zen-accordion {
  background: #fafbfc !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 8px;
}

.q-accordion-summary {
  padding: 0.65rem 0.95rem;
  color: #334155;
  cursor: pointer;
  font-size: 0.82rem;
}

.q-accordion-summary:hover {
  background: #f1f5f9;
}

.summary-left {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #0d9488;
}

.q-accordion-content {
  border-top: 1px solid #e2e8f0;
  padding: 1rem 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.model-answer-prose,
.model-answer-prose p,
.model-answer-prose li {
  color: #1e293b !important;
  line-height: 1.65;
  font-size: 0.92rem;
}

.model-answer-prose code {
  background: #f1f5f9 !important;
  color: #0d9488 !important;
  border: 1px solid #e2e8f0 !important;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  font-size: 0.85em;
}

.zen-marking-note, .zen-examiner-note {
  font-size: 0.8rem;
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  padding: 0.45rem 0.75rem;
  border-radius: 6px;
}

.zen-marking-note {
  background: #f0fdf4;
  color: #166534;
  border: 1px solid rgba(22, 101, 52, 0.15);
}

.zen-examiner-note {
  background: #fffbeb;
  color: #92400e;
  border: 1px solid rgba(146, 64, 14, 0.15);
}

.note-label {
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
}

.note-text {
  flex: 1;
}

.zen-empty {
  padding: 3rem 1.5rem;
  text-align: center;
  background: #ffffff !important;
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
  color: #64748b;
}

/* Formula Ledgers in Light Zen Mode */
.zen-formula-wrap .formula-ledger-header {
  background: #ffffff !important;
  border: 1px solid rgba(15, 23, 42, 0.08) !important;
  border-radius: 12px;
  color: #0f172a;
  padding: 1.25rem;
}

.zen-formula-wrap .formula-ledger-header h2 {
  color: #0f172a;
  font-size: 1.3rem;
}

.zen-formula-wrap .formula-section-card {
  background: #ffffff !important;
  border: 1px solid rgba(15, 23, 42, 0.08) !important;
  border-radius: 12px;
}

.zen-formula-wrap .formula-section-head h3 {
  color: #0f172a;
}

.zen-formula-wrap .formula-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.zen-formula-wrap .formula-item-name strong {
  color: #0d9488;
}

.zen-formula-wrap .formula-box {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-left: 3px solid #0d9488;
}

.zen-formula-wrap .formula-box code {
  color: #0f172a;
}

.zen-formula-wrap .formula-notes {
  color: #475569;
}

'''

new_content = content[:idx_start] + new_styles + content[idx_end:]

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated styles.css successfully!")
