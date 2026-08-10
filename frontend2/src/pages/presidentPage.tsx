
const PresidentPage = () => {
  return (
    <section className="">
      <h1 className="text-4xl font-bold text-center mb-12">President</h1>
      
      <div className="max-w-6xl mx-auto px-6 text-gray-600 leading-relaxed">
        <img 
          src="/path-to-your-photo.jpg" 
          alt="President" 
          className="float-right ml-8 mb-4 w-64 h-auto object-cover rounded shadow"
        />
        <p className="mb-4">
          Replace this paragraph with your content. The image is positioned using the <code>float-right</code> utility, which removes it from the normal document flow and aligns it to the right side of its container. 
        </p>
        <p>
          Inline content and block elements adjacent to the floated element will automatically flow and wrap around its left edge. The <code>ml-8</code> (margin-left) and <code>mb-4</code> (margin-bottom) utilities establish a safe zone, guaranteeing the text breaks to the next line without physically touching the image boundary.
        </p>
      </div>
    </section>
  );
}

export default PresidentPage;
