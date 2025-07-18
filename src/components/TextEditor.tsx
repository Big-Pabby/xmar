"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import { useEffect } from "react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import { createLowlight } from "lowlight";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaQuoteRight,
  FaCode,
  FaUndo,
  FaRedo,
  FaImage,
  FaLink,
} from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";
interface TextEditorProps {
  initialContent?: string;
  onContentChange?: (content: string) => void;
}

const lowlight = createLowlight();
lowlight.register("javascript", javascript);
lowlight.register("html", html);
lowlight.register("css", css);

const TextEditor = ({
  initialContent = "",
  onContentChange,
}: TextEditorProps) => {
  const extensions = [
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
    Underline,
    Link.configure({
      openOnClick: false,
    }),
    Image,
    HorizontalRule,
    CodeBlockLowlight.configure({
      lowlight,
    }),
  ];
  const editor = useEditor({
    extensions,
    content: initialContent,
    onUpdate: ({ editor }) => {
      // Send HTML content to parent component
      const html = editor.getHTML();
      onContentChange?.(html);
    },
  });

  // Update editor content when initialContent prop changes
  useEffect(() => {
    if (editor && initialContent !== editor.getHTML()) {
      editor.commands.setContent(initialContent);
    }
  }, [editor, initialContent]);
  const addImage = () => {
    const url = prompt("Enter image URL");
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = prompt("Enter link URL");
    if (url) {
      editor
        ?.chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };

  const clearFormatting = () => {
    editor?.chain().focus().clearNodes().unsetAllMarks().run();
  };

  // const downloadAsHTML = useCallback(() => {
  //   const html = editor?.getHTML();
  //   const blob = new Blob([html || ""], { type: "text/html" });
  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.download = "blog-post.html";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="bg-white relative w-full rounded-[10px] border-[1px] border-[#A2A1A833] p-10">
      {/* Toolbar */}
      <div className=" sticky z-[50] top-[120px] py-4 bg-white left-0 flex flex-wrap gap-4">
        <button
          className={`font-bold ${
            editor?.isActive("bold") ? "text-primary" : ""
          }`}
          onClick={() => editor?.chain().focus().toggleBold().run()}
        >
          <FaBold />
        </button>
        <button
          className={`font-bold ${
            editor?.isActive("italic") ? "text-primary" : ""
          }`}
          onClick={() => editor?.chain().focus().toggleItalic().run()}
        >
          <FaItalic />
        </button>
        <button
          className={`font-bold ${
            editor?.isActive("underline") ? "text-primary" : ""
          }`}
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
        >
          <FaUnderline />
        </button>
        <button
          className={`font-bold ${
            editor?.isActive("heading", { level: 1 }) ? "text-primary" : ""
          }`}
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          H1
        </button>
        <button
          className={`font-bold ${
            editor?.isActive("heading", { level: 2 }) ? "text-primary" : ""
          }`}
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </button>
        <button
          className={`font-bold ${
            editor?.isActive("heading", { level: 3 }) ? "text-primary" : ""
          }`}
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          H3
        </button>
        <button
          className={`font-bold ${
            editor?.isActive("bulletList") ? "text-primary" : ""
          }`}
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
        >
          <FaListUl />
        </button>
        <button
          className={`font-bold ${
            editor?.isActive("orderedList") ? "text-primary" : ""
          }`}
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
        >
          <FaListOl />
        </button>
        <button
          className={`font-bold ${
            editor?.isActive("blockquote") ? "text-primary" : ""
          }`}
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
        >
          <FaQuoteRight />
        </button>
        <button
          className={`font-bold ${
            editor?.isActive("codeBlock") ? "text-primary" : ""
          }`}
          onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
        >
          <FaCode />
        </button>
        <button
          className={`font-bold ${
            editor?.isActive("link") ? "text-primary" : ""
          }`}
          onClick={addLink}
        >
          <FaLink />
        </button>
        <button
          className={`font-bold ${
            editor?.isActive("image") ? "text-primary" : ""
          }`}
          onClick={addImage}
        >
          <FaImage />
        </button>
        <button onClick={() => editor?.chain().focus().undo().run()}>
          <FaUndo />
        </button>
        <button onClick={() => editor?.chain().focus().redo().run()}>
          <FaRedo />
        </button>
        <button onClick={clearFormatting}>
          <AiOutlineClear />
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        className=" tiptap border-[1px] border-[#ccc] p-[1rem] overflow-y-auto"
      />
    </div>
  );
};

export default TextEditor;
