export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 dark:bg-zinc-900">
      <main className="flex max-w-2xl flex-col items-center justify-center space-y-6 text-center bg-white p-12 rounded-2xl shadow-sm dark:bg-zinc-800">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          홍희준
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
        </p>
      </main>
    </div>
  );
}
