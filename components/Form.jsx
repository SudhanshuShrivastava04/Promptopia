import Link from "next/link";
import Typewriter from "./Typewriter";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="orange_gradient">{type} Post</span>
      </h1>
      <div className="desc text-left max-w-md">
        <Typewriter text="Unlock your creativity and share extraordinary prompts with the world on any AI-powered platform. Let your imagination soar and inspire others!" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => {
              setPost({ ...post, prompt: e.target.value });
            }}
            placeholder="Write your prompt here!"
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag{" "}
            <span className="font-normal text-sm orange_gradient">
              (#product, #webdevelopment, #idea, etc...)
            </span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => {
              setPost({ ...post, tag: e.target.value });
            }}
            placeholder="#Tags"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link
            href="/"
            className="text-sm outline px-5 py-1.5 rounded-full outline-orange-600 text-orange-600 hover:scale-105 transition duration-200"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 bg-gradient-to-r from-orange-600 to-yellow-500 transition duration-200 hover:scale-105 rounded-full text-white"
          >
            {submitting ? `${type}ing` : `${type}`}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
