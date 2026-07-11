{ pkgs, ... }: {
  languages.javascript = {
    enable = true;
  };
  processes.dev.exec = "pnpm dev";
  tasks = {
    "website:export-md" = {
      exec = "${pkgs.emacs}/bin/emacs -Q --script export.el";
      execIfModified = [ "docs/**/*.org" ];
    };
    "website:build" = {
      exec = "pnpm run build";
      after = [ "website:export-md@succeeded" ];
    };
  };
}
