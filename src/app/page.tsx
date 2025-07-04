import Image from "next/image";
import { CloudIcon } from "@heroicons/react/24/solid"; // Using a solid icon for the logo

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      {/* Header/Logo Section */}
      <header className="absolute top-0 left-0 p-8 flex items-center space-x-3">
        <CloudIcon className="h-10 w-10 text-orange-600" />
        <h1 className="text-3xl font-bold text-orange-700">DevOps Juaracoding</h1>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col lg:flex-row items-center justify-center p-8 gap-12 max-w-6xl mx-auto">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Master DevOps with Juaracoding
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Unlock the power of modern software development with our comprehensive DevOps courses. Learn CI/CD, Docker, Kubernetes, Cloud, and more!
          </p>
          <a
            href="https://juaracoding.co.id"
            target="_blank"
            className="inline-block bg-orange-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-orange-700 transition duration-300 ease-in-out"
          >
            Explore Courses
          </a>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/images/hero-orange.jpg"
            alt="DevOps Team Collaboration"
            width={800}
            height={500}
            layout="responsive"
            className="rounded-lg shadow-xl"
            priority
          />
        </div>
      </main>

      {/* Footer Section (Optional, can be expanded) */}
      <footer className="mt-12 p-4 text-center text-gray-600">
        &copy; {new Date().getFullYear()} DevOps Juaracoding. All rights reserved.
      </footer>
    </div>
  );
}
