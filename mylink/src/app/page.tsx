export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 dark:bg-zinc-900">
      <main className="flex max-w-2xl flex-col items-center justify-center space-y-6 text-center bg-white p-12 rounded-2xl shadow-sm dark:bg-zinc-800">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          홍희준
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          안녕하세요! 새로운 기술을 탐구하고 사용자 경험을 개선하는 것을 즐기는 개발자입니다.<br />
          현재 웹 개발과 AI 기반의 생산성 향상에 관심을 두고 꾸준히 성장하고 있습니다.
        </p>
      </main>
    </div>
  );
}
