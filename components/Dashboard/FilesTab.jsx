"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FilesTab = () => {
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const filesRef = useRef([]);

  useEffect(() => {
    filesRef.current.forEach((file, index) => {
      if (file) {
        gsap.fromTo(
          file,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: file,
              start: "top 95%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [viewMode]);

  const files = [
    {
      id: 1,
      name: "Brand Guidelines v2.pdf",
      type: "pdf",
      size: "2.4 MB",
      modified: "2 hours ago",
      project: "Brand Identity Package",
      thumbnail:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=200&h=200&fit=crop",
      color: "bg-red-500",
    },
    {
      id: 2,
      name: "Homepage Mockup.fig",
      type: "figma",
      size: "15.2 MB",
      modified: "1 day ago",
      project: "E-commerce Website",
      thumbnail:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop",
      color: "bg-purple-500",
    },
    {
      id: 3,
      name: "Logo Variations.zip",
      type: "zip",
      size: "8.7 MB",
      modified: "3 days ago",
      project: "Brand Identity Package",
      thumbnail: null,
      color: "bg-yellow-500",
    },
    {
      id: 4,
      name: "Mobile App Wireframes.pdf",
      type: "pdf",
      size: "5.1 MB",
      modified: "1 week ago",
      project: "Mobile App Design",
      thumbnail:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=200&fit=crop",
      color: "bg-red-500",
    },
    {
      id: 5,
      name: "Product Photos.zip",
      type: "zip",
      size: "45.8 MB",
      modified: "1 week ago",
      project: "E-commerce Website",
      thumbnail: null,
      color: "bg-yellow-500",
    },
    {
      id: 6,
      name: "Style Guide.pdf",
      type: "pdf",
      size: "3.2 MB",
      modified: "2 weeks ago",
      project: "Brand Identity Package",
      thumbnail:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=200&h=200&fit=crop",
      color: "bg-red-500",
    },
    {
      id: 7,
      name: "User Flow Diagram.png",
      type: "image",
      size: "1.8 MB",
      modified: "2 weeks ago",
      project: "Mobile App Design",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
      color: "bg-green-500",
    },
    {
      id: 8,
      name: "Final Presentation.pptx",
      type: "powerpoint",
      size: "12.4 MB",
      modified: "3 weeks ago",
      project: "Brand Identity Package",
      thumbnail: null,
      color: "bg-orange-500",
    },
  ];

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return "bx-file-pdf";
      case "figma":
        return "bx-palette";
      case "zip":
        return "bx-archive";
      case "image":
        return "bx-image";
      case "powerpoint":
        return "bx-slideshow";
      default:
        return "bx-file";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl racing font-bold text-gray-900">
            Project Files
          </h1>
          <p className="openSans text-gray-600 mt-1">
            Access and download your project deliverables
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-colors ${
                viewMode === "grid" ? "bg-white shadow-sm" : "hover:bg-gray-200"
              }`}
            >
              <i className="bx bx-grid-alt text-gray-600"></i>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-colors ${
                viewMode === "list" ? "bg-white shadow-sm" : "hover:bg-gray-200"
              }`}
            >
              <i className="bx bx-list-ul text-gray-600"></i>
            </button>
          </div>
          <button className="px-6 py-3 bg-[#dc2828] text-black rounded-xl hover:bg-[#b91c1c] transition-colors racing font-bold">
            <i className="bx bx-upload mr-2"></i>
            Upload Files
          </button>
        </div>
      </div>

      {/* Storage Usage */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="racing font-bold text-lg">Storage Usage</h3>
          <span className="openSans text-sm text-gray-600">
            2.1 GB of 10 GB used
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "21%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-3 bg-gradient-to-r from-[#dc2828] to-[#b91c1c] rounded-full"
          ></motion.div>
        </div>
      </div>

      {/* Files Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {files.map((file, index) => (
            <motion.div
              key={file.id}
              ref={(el) => (filesRef.current[index] = el)}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              {/* File Preview */}
              <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                {file.thumbnail ? (
                  <img
                    src={file.thumbnail || "/placeholder.svg"}
                    alt={file.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-16 h-16 ${file.color} rounded-xl flex items-center justify-center`}
                  >
                    <i
                      className={`bx ${getFileIcon(file.type)} text-white text-2xl`}
                    ></i>
                  </div>
                )}
              </div>

              {/* File Info */}
              <div className="space-y-2">
                <h4 className="racing font-bold text-gray-900 truncate group-hover:text-[#dc2828] transition-colors">
                  {file.name}
                </h4>
                <p className="openSans text-sm text-gray-600">{file.project}</p>
                <div className="flex justify-between items-center text-xs text-gray-500 openSans">
                  <span>{file.size}</span>
                  <span>{file.modified}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex-1 py-2 bg-[#dc2828] text-black rounded-lg hover:bg-[#b91c1c] transition-colors racing font-bold text-sm">
                  Download
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <i className="bx bx-share text-gray-600"></i>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-gray-600 openSans">
              <div className="col-span-5">Name</div>
              <div className="col-span-2">Project</div>
              <div className="col-span-2">Size</div>
              <div className="col-span-2">Modified</div>
              <div className="col-span-1">Actions</div>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {files.map((file, index) => (
              <motion.div
                key={file.id}
                ref={(el) => (filesRef.current[index] = el)}
                className="p-6 hover:bg-gray-50 transition-colors group"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-5 flex items-center">
                    <div
                      className={`w-10 h-10 ${file.color} rounded-lg flex items-center justify-center mr-3`}
                    >
                      <i
                        className={`bx ${getFileIcon(file.type)} text-white`}
                      ></i>
                    </div>
                    <div>
                      <h4 className="racing font-bold text-gray-900 group-hover:text-[#dc2828] transition-colors">
                        {file.name}
                      </h4>
                    </div>
                  </div>
                  <div className="col-span-2 openSans text-sm text-gray-600">
                    {file.project}
                  </div>
                  <div className="col-span-2 openSans text-sm text-gray-600">
                    {file.size}
                  </div>
                  <div className="col-span-2 openSans text-sm text-gray-600">
                    {file.modified}
                  </div>
                  <div className="col-span-1">
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <i className="bx bx-download text-gray-600"></i>
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <i className="bx bx-share text-gray-600"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* File Categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            type: "Images",
            count: 12,
            icon: "bx-image",
            color: "bg-green-500",
          },
          {
            type: "Documents",
            count: 8,
            icon: "bx-file-pdf",
            color: "bg-red-500",
          },
          {
            type: "Design Files",
            count: 5,
            icon: "bx-palette",
            color: "bg-purple-500",
          },
          {
            type: "Archives",
            count: 3,
            icon: "bx-archive",
            color: "bg-yellow-500",
          },
        ].map((category, index) => (
          <div
            key={category.type}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
          >
            <div
              className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
            >
              <i className={`bx ${category.icon} text-white text-2xl`}></i>
            </div>
            <h3 className="text-2xl racing font-bold text-gray-900">
              {category.count}
            </h3>
            <p className="openSans text-gray-600">{category.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilesTab;
