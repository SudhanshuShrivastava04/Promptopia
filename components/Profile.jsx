import PromptCard from "@/components/PromptCard";
import Typewriter from "./Typewriter";

const Profile = ({ name, data, desc, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="orange_gradient">{name}</span>
      </h1>
      <p className="desc text-left">
        <Typewriter text={desc} />
      </p>

      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
