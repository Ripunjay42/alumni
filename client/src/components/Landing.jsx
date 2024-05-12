import React from 'react';

export default function Landing() {

  document.body.style.overflow = 'hidden';

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white-900 dark:text-white mb-6">Welcome to Alumni information</h1>
        <p className="text-3xl font-bold text-white-900 dark:text-white mb-6">Stay connected with your alma mater!</p>
      </div>
    </section>
  );
}

