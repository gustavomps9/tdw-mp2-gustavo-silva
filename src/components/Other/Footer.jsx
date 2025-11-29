import { useLanguage } from "../../hooks/useLanguage";
export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="bg-gray-100 dark:bg-gray-900 
                       text-gray-800 dark:text-gray-300 
                       py-6 mt-10 border-t 
                       border-gray-300 dark:border-green-400/20"
    >
      <div className="text-center">
        <p className="opacity-80">© {new Date().getFullYear()} Gustavo Silva</p>

        <p className="text-green-600 dark:text-green-300 mt-1">
          {t("footer.miniProject")} - TDW
        </p>
      </div>
    </footer>
  );
}
