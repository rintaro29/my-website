import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <header className="  py-6">
      <div className="container mx-auto flex w-full items-center  justify-between px-8 md:px-14 lg:px-24">
        <div className="text-lg font-bold ">Hello my website</div>
        <div className="hidden items-center space-x-12 md:flex">
          <Link href="#" className="transition-all duration-300 hover:text-selected-text">
            ホーム
          </Link>
          <Link href="#Portfolio" className="transition-all duration-300 hover:text-selected-text">
            ポートフォリオ
          </Link>
          <Link href="#SkillStack" className="transition-all duration-300 hover:text-selected-text">
            スキルスタック
          </Link>
          <Link href="#Contact">
            <button className="rounded bg-theme px-6 py-2 font-bold transition-all duration-300 hover:bg-pink-300">
              お問い合わせ
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <MenuIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
