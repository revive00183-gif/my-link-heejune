export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-black p-4">
      <main className="flex flex-col items-center space-y-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-10 max-w-xl w-full text-center">

        <img src="/blank_profile.svg" alt="Blank Avatar" className="w-32 h-32 rounded-full border-2 border-gray-300 mb-4 opacity-50" />
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          홍희준
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          안녕하세요! 새로운 기술을 탐구하고 사용자 경험을 개선하는 것을 즐기는 개발자입니다.<br />
          현재 웹 개발과 AI 기반의 생산성 향상에 관심을 두고 꾸준히 성장하고 있습니다.
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/revive00183-gif" target="_blank" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">GitHub</a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">LinkedIn</a>
        </div>
      </main>
    </div>
  );
}
