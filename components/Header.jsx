export default function Header() {
  return (
    <header className="bg-[#052E16] w-full h-[70px] p-3 pl-16  text-white text-center">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold ">SIE</h1>
        <img
          src="/assets/gobierno.svg"
          alt="Logo de gobierno"
          className="w-32"
        />
      </div>
    </header>
  );
}