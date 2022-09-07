import React from 'react';
import { Link } from 'react-router-dom';

import NewsAuthor01 from '../images/news-author-01.jpg';
import NewsAuthor02 from '../images/news-author-02.jpg';
import NewsAuthor03 from '../images/news-author-03.jpg';
import NewsAuthor04 from '../images/news-author-04.jpg';
import NewsAuthor06 from '../images/news-author-06.jpg';

function DestinationList() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
            <h1 className="h1 mb-4">Adventures near Baltimore!</h1>
            <p className="text-xl text-gray-600"></p>
          </div>

          {/* Main content */}
          <div className="md:flex md:justify-between">
            {/* Articles container */}
            <div className="md:grow -mt-4">

              {/* 1st article */}
              <article className="flex items-center py-4 border-b border-gray-200">
                <div>
                  <header>
                    <h2 className="h4 mb-2">
                      <Link to="/blog-post" className="hover:underline">Create and Deploy a blog with Simple</Link>
                    </h2>
                  </header>
                  <div className="text-lg text-gray-600 mb-4">
                    In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.
                  </div>
                  <footer className="text-sm">
                    <div className="flex items-center">
                      <div className="flex shrink-0 mr-3">
                        <a className="relative" href="#0">
                          <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                          <img className="relative rounded-full" src={NewsAuthor04} width="32" height="32" alt="Author 04" />
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">Micheal Osman</a>
                        <span className="text-gray-600"> · July 20, 2020</span>
                      </div>
                    </div>
                  </footer>
                </div>
                <Link to="/blog-post" className="block shrink-0 ml-6">
                  <span className="sr-only">Read more</span>
                  <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </Link>
              </article>

              {/* 2nd article */}
              <article className="flex items-center py-4 border-b border-gray-200">
                <div>
                  <header>
                    <h2 className="h4 mb-2">
                      <Link to="/blog-post" className="hover:underline">Getting started with Next.js</Link>
                    </h2>
                  </header>
                  <div className="text-lg text-gray-600 mb-4">
                    In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.
                  </div>
                  <footer className="text-sm">
                    <div className="flex items-center">
                      <div className="flex shrink-0 mr-3">
                        <a className="relative" href="#0">
                          <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                          <img className="relative rounded-full" src={NewsAuthor01} width="32" height="32" alt="Author 01" />
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">Lisa Allison</a>
                        <span className="text-gray-600"> · July 19, 2020</span>
                      </div>
                    </div>
                  </footer>
                </div>
                <Link to="/blog-post" className="block shrink-0 ml-6">
                  <span className="sr-only">Read more</span>
                  <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </Link>
              </article>

              {/* 3rd article */}
              <article className="flex items-center py-4 border-b border-gray-200">
                <div>
                  <header>
                    <h2 className="h4 mb-2">
                      <Link to="/blog-post" className="hover:underline">How to identify high-intent leads</Link>
                    </h2>
                  </header>
                  <div className="text-lg text-gray-600 mb-4">
                    In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.
                  </div>
                  <footer className="text-sm">
                    <div className="flex items-center">
                      <div className="flex shrink-0 mr-3">
                        <a className="relative" href="#0">
                          <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                          <img className="relative rounded-full" src={NewsAuthor02} width="32" height="32" alt="Author 02" />
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">Knut Mayer</a>
                        <span className="text-gray-600"> · July 19, 2020</span>
                      </div>
                    </div>
                  </footer>
                </div>
                <Link to="/blog-post" className="block shrink-0 ml-6">
                  <span className="sr-only">Read more</span>
                  <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </Link>
              </article>

              {/* 4th article */}
              <article className="flex items-center py-4 border-b border-gray-200">
                <div>
                  <header>
                    <h2 className="h4 mb-2">
                      <Link to="/blog-post" className="hover:underline">Why we think Simple is good for developers</Link>
                    </h2>
                  </header>
                  <div className="text-lg text-gray-600 mb-4">
                    In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.
                  </div>
                  <footer className="text-sm">
                    <div className="flex items-center">
                      <div className="flex shrink-0 mr-3">
                        <a className="relative" href="#0">
                          <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                          <img className="relative rounded-full" src={NewsAuthor04} width="32" height="32" alt="Author 04" />
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">Micheal Osman</a>
                        <span className="text-gray-600"> · July 17, 2020</span>
                      </div>
                    </div>
                  </footer>
                </div>
                <Link to="/blog-post" className="block shrink-0 ml-6">
                  <span className="sr-only">Read more</span>
                  <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </Link>
              </article>

              {/* 5th article */}
              <article className="flex items-center py-4 border-b border-gray-200">
                <div>
                  <header>
                    <h2 className="h4 mb-2">
                      <Link to="/blog-post" className="hover:underline">Getting started with Vue.js and Stripe</Link>
                    </h2>
                  </header>
                  <div className="text-lg text-gray-600 mb-4">
                    In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.
                  </div>
                  <footer className="text-sm">
                    <div className="flex items-center">
                      <div className="flex shrink-0 mr-3">
                        <a className="relative" href="#0">
                          <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                          <img className="relative rounded-full" src={NewsAuthor03} width="32" height="32" alt="Author 03" />
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">Justin Park</a>
                        <span className="text-gray-600"> · July 16, 2020</span>
                      </div>
                    </div>
                  </footer>
                </div>
                <Link to="/blog-post" className="block shrink-0 ml-6">
                  <span className="sr-only">Read more</span>
                  <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </Link>
              </article>

              {/* 6th article */}
              <article className="flex items-center py-4 border-b border-gray-200">
                <div>
                  <header>
                    <h2 className="h4 mb-2">
                      <Link to="/blog-post" className="hover:underline">How to work with friendly APIs</Link>
                    </h2>
                  </header>
                  <div className="text-lg text-gray-600 mb-4">
                    In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.
                  </div>
                  <footer className="text-sm">
                    <div className="flex items-center">
                      <div className="flex shrink-0 mr-3">
                        <a className="relative" href="#0">
                          <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                          <img className="relative rounded-full" src={NewsAuthor01} width="32" height="32" alt="Author 01" />
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">Lisa Allison</a>
                        <span className="text-gray-600"> · July 12, 2020</span>
                      </div>
                    </div>
                  </footer>
                </div>
                <Link to="/blog-post" className="block shrink-0 ml-6">
                  <span className="sr-only">Read more</span>
                  <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </Link>
              </article>

              {/* 7th article */}
              <article className="flex items-center py-4 border-b border-gray-200">
                <div>
                  <header>
                    <h2 className="h4 mb-2">
                      <Link to="/blog-post" className="hover:underline">Introducing the Testing Field Guide</Link>
                    </h2>
                  </header>
                  <div className="text-lg text-gray-600 mb-4">
                    In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.
                  </div>
                  <footer className="text-sm">
                    <div className="flex items-center">
                      <div className="flex shrink-0 mr-3">
                        <a className="relative" href="#0">
                          <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                          <img className="relative rounded-full" src={NewsAuthor06} width="32" height="32" alt="Author 06" />
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">Cory McCall</a>
                        <span className="text-gray-600"> · July 10, 2020</span>
                      </div>
                    </div>
                  </footer>
                </div>
                <Link to="/blog-post" className="block shrink-0 ml-6">
                  <span className="sr-only">Read more</span>
                  <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </Link>
              </article>

              {/* 8th article */}
              <article className="flex items-center py-4 border-b border-gray-200">
                <div>
                  <header>
                    <h2 className="h4 mb-2">
                      <Link to="/blog-post" className="hover:underline">Community Digest: Summer Edition</Link>
                    </h2>
                  </header>
                  <div className="text-lg text-gray-600 mb-4">
                    In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.
                  </div>
                  <footer className="text-sm">
                    <div className="flex items-center">
                      <div className="flex shrink-0 mr-3">
                        <a className="relative" href="#0">
                          <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                          <img className="relative rounded-full" src={NewsAuthor01} width="32" height="32" alt="Author 01" />
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">Lisa Allison</a>
                        <span className="text-gray-600"> · July 10, 2020</span>
                      </div>
                    </div>
                  </footer>
                </div>
                <Link to="/blog-post" className="block shrink-0 ml-6">
                  <span className="sr-only">Read more</span>
                  <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </Link>
              </article>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default DestinationList;