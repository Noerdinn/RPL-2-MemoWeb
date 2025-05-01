import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center border-t py-6 px-4 text-sm text-gray-700">
      <div className="flex flex-col items-center gap-2">
        <Image src="/assets/Logo-rpl2.png" alt="IMPHNEN Logo" width={80} height={40} />
        <p>
          © 2025 COPYRIGHT. Dibuat untuk <span className="text-blue-600">RPL 2</span> oleh M.N.R.
        </p>
      </div>
    </footer>
  );
}
