import { useRef, memo } from "react";
import useCarouselStore from "../store/useCarouselStore";
import { useToast } from "./Toast";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

const CoverImagePicker = () => {
  const coverImage = useCarouselStore((s) => s.coverImage);
  const setCoverImage = useCarouselStore((s) => s.setCoverImage);
  const removeCoverImage = useCarouselStore((s) => s.removeCoverImage);
  const fileInputRef = useRef(null);
  const toast = useToast();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast("Please select an image file", "error");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast("Image too large (max 10 MB)", "error");
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      setCoverImage(ev.target.result);
      toast("Cover image added", "success");
    };
    reader.onerror = () => toast("Failed to read image file", "error");
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  if (coverImage) {
    return (
      <div className="flex items-center justify-center gap-2 py-1">
        <img
          src={coverImage}
          alt="Cover"
          className="w-8 h-8 rounded object-cover border border-gray-600"
        />
        <span className="text-xs text-gray-400">Cover image</span>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="text-xs text-gray-400 hover:text-white transition-colors px-1"
          title="Change cover image"
        >
          Change
        </button>
        <button
          onClick={removeCoverImage}
          className="text-xs text-red-400 hover:text-red-300 transition-colors px-1"
          title="Remove cover image"
        >
          Remove
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    );
  }

  return (
    <div className="flex justify-center py-1">
      <button
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
        title="Add a cover image as the first slide"
      >
        <i className="fa-solid fa-image text-versa-one" />
        Add cover image
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default memo(CoverImagePicker);
