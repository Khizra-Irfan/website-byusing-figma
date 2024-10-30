import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full h-[91px] bg-[#252B42] flex items-center px-8">
            {/* Left-aligned Brand Name */}
            <h3 className="text-[#FFFFFF] font-montserrat text-[24px] font-bold tracking-[0.1px] transition-transform duration-200 hover:scale-105 cursor-pointer">
                BrandName
            </h3>

            {/* Center-aligned Links */}
            <div className="flex items-center gap-[21px] mx-auto">
                <Link href="/" className="text-white cursor-pointer transition duration-200 hover:text-[#23A6F0]">
                    <b>Home</b>
                </Link>
                <Link href="/product" className="text-white cursor-pointer transition duration-200 hover:text-[#23A6F0]">
                    <b>Product</b>
                </Link>
                <Link href="/pricing" className="text-white cursor-pointer transition duration-200 hover:text-[#23A6F0]">
                    <b>Pricing</b>
                </Link>
                <Link href="/contact" className="text-white cursor-pointer transition duration-200 hover:text-[#23A6F0]">
                    <b>Contact</b>
                </Link>
            </div>

            {/* Right-aligned Buttons */}
            <div className="flex items-center gap-4 ml-auto">
                <button className="text-white cursor-pointer transition-transform duration-200 hover:scale-105 hover:text-[#23A6F0]">
                    Login
                </button>
                <button className="text-white font-bold bg-[#23A6F0] w-[110px] h-[52px] inline-flex items-center justify-center rounded transition-all duration-200 hover:bg-[#1a8bc1] hover:scale-105 active:scale-95">
                    JOIN US
                </button>
            </div>
        </nav>
    );
}
