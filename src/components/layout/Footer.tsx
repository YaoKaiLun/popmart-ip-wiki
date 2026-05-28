import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-gray-500">
            {SITE_NAME} — 粉丝创作的开源项目
          </p>
          <a
            href="https://github.com/yaokailun/popmart-ip-wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors hover:text-gray-600"
          >
            GitHub
          </a>
          <p className="text-xs text-gray-400">
            &copy; 2025 {SITE_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
