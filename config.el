(require 'package)
(require 'org)
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/"))
(package-initialize)
(package-refresh-contents)
(package-install 'f)
(package-install 'ox-gfm)
(package-vc-install '(conlanging . (:url "https://labs.phundrak.com/phundrak/conlanging.el.git")))

(message "Emacs directory: %s" user-emacs-directory)

(require 'f)
(require 'ox-gfm)
(require 'ox-publish)

(setq org-confirm-babel-evaluate nil
      org-html-validation-link nil
      make-backup-files nil
      org-export-with-broken-links t)

(defvar project-root
  (file-name-as-directory (expand-file-name "docs" default-directory)))

(dolist (file (f-files project-root (lambda (file) (f-ext-p file "org")) t))
  (message "Exporting %s" (f-relative file))
  (with-temp-buffer
      (find-file file)
      (org-export-to-file 'gfm (concat (f-no-ext file) ".md"))))

(message "Project generated!")
