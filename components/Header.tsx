import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/drivemate-logo.JPG"
            alt="DriveMate Logo"
            width={48}
            height={48}
            priority
          />
          <span className="text-xl font-bold">DriveMate</span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600">
            首頁
          </Link>
          <Link
            href="https://www.instagram.com/drivemate.tw/"
            target="_blank"
            className="hover:text-blue-600"
          >
            Instagram
          </Link>
          <Link href="#contact" className="hover:text-blue-600">
            聯絡我們
          </Link>
        </nav>

      </div>
    </header>
  );
}
