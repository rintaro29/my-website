import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="  py-6">
      <div className="flex">
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
            <MenuIcon onClick={() => setMenuOpen(!menuOpen)} />
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md bg-slate-400 shadow-lg">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                  ホーム
                </Link>
                <Link href="#Portfolio" className="block px-4 py-2 hover:bg-gray-200">
                  ポートフォリオ
                </Link>
                <Link href="#SkillStack" className="block px-4 py-2 hover:bg-gray-200">
                  スキルスタック
                </Link>
                <Link href="#Contact" className="block px-4 py-2 hover:bg-gray-200">
                  お問い合わせ
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="relative right-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
