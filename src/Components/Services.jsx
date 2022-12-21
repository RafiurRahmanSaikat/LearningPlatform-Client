import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div class="py-16">
        <div class="xl:container m-auto px-6 text-gray-500 md:px-12">
          <div>
            <h2 class="mt-4 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
              Our Services
            </h2>
          </div>
          <div class="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div class="relative space-y-8 py-12 p-8">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
                  class="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div class="space-y-2">
                  <h5 class="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                    Ethical Hacking
                  </h5>
                  <p class="text-sm  dark:text-gray-300">
                    Learn Ethical Hacking From Scratch
                  </p>
                </div>
                <div class="flex items-center justify-between group-hover:text-primary">
                 
                </div>
              </div>
            </div>
            <div class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div class="relative space-y-8 py-12 p-8">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
                  class="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div class="space-y-2">
                  <h5 class="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                    Web Development
                  </h5>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    The Ultimate 2022 Fullstack Web Development Bootcamp
                  </p>
                </div>
                <div class="flex items-center justify-between group-hover:text-primary">
                  
                </div>
              </div>
            </div>
            <div class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div class="relative space-y-8 py-12 p-8">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
                  class="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div class="space-y-2">
                  <h5 class="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                    Machine Learning
                  </h5>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    The Complete Machine Learning Course with Python
                  </p>
                </div>
                <div class="flex items-center justify-between group-hover:text-primary">
                  
                </div>
              </div>
            </div>
            <div class="group relative transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div class="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
                  class="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div class="space-y-2">
                  <h5 class="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                    Data Analysis
                  </h5>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Data Analytics in Regression
                  </p>
                </div>
                <div class="flex items-center justify-between group-hover:text-primary">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
