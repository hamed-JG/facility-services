import { useState } from "react";

const AddProduct = () => {
  const [form, setForm] = useState({
    id: "",
    slug: "",
    title: "",
    shortDesc: "",
    description: "",
    price: "",
    images: [""],
    specs: {},
    tags: [""],
    popular: false,
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setForm((prev) => ({ ...prev, [name]: val }));
  };

  const handleArrayChange = (key, index, value) => {
    const updated = [...form[key]];
    updated[index] = value;
    setForm((prev) => ({ ...prev, [key]: updated }));
  };

  const handleSpecsChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      specs: { ...prev.specs, [key]: value },
    }));
  };

  const addImageField = () => {
    setForm((prev) => ({ ...prev, images: [...prev.images, ""] }));
  };

  const addTagField = () => {
    setForm((prev) => ({ ...prev, tags: [...prev.tags, ""] }));
  };

  const [specKey, setSpecKey] = useState("");
  const [specValue, setSpecValue] = useState("");

  const addSpec = () => {
    if (specKey && specValue) {
      handleSpecsChange(specKey, specValue);
      setSpecKey("");
      setSpecValue("");
    }
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: 800,
        margin: "0 auto",
        direction: "rtl",
      }}
    >
      <h1>افزودن محصول جدید</h1>
      <input
        placeholder="ID"
        name="id"
        value={form.id}
        onChange={handleChange}
      />
      <input
        placeholder="Slug"
        name="slug"
        value={form.slug}
        onChange={handleChange}
      />
      <input
        placeholder="عنوان محصول"
        name="title"
        value={form.title}
        onChange={handleChange}
      />
      <input
        placeholder="توضیح کوتاه"
        name="shortDesc"
        value={form.shortDesc}
        onChange={handleChange}
      />
      <textarea
        placeholder="توضیح کامل"
        name="description"
        value={form.description}
        onChange={handleChange}
      />
      <input
        placeholder="قیمت"
        name="price"
        value={form.price}
        onChange={handleChange}
      />

      <h3>تصاویر:</h3>
      {form.images.map((img, i) => (
        <input
          key={i}
          value={img}
          onChange={(e) => handleArrayChange("images", i, e.target.value)}
          placeholder={`تصویر ${i + 1}`}
        />
      ))}
      <button onClick={addImageField}>+ تصویر جدید</button>

      <h3>برچسب‌ها:</h3>
      {form.tags.map((tag, i) => (
        <input
          key={i}
          value={tag}
          onChange={(e) => handleArrayChange("tags", i, e.target.value)}
          placeholder={`برچسب ${i + 1}`}
        />
      ))}
      <button onClick={addTagField}>+ برچسب جدید</button>

      <h3>ویژگی‌ها:</h3>
      <input
        placeholder="عنوان ویژگی"
        value={specKey}
        onChange={(e) => setSpecKey(e.target.value)}
      />
      <input
        placeholder="مقدار ویژگی"
        value={specValue}
        onChange={(e) => setSpecValue(e.target.value)}
      />
      <button onClick={addSpec}>+ افزودن ویژگی</button>

      <div>
        <label>
          <input
            type="checkbox"
            name="popular"
            checked={form.popular}
            onChange={handleChange}
          />
          محصول پرطرفدار
        </label>
        <label>
          <input
            type="checkbox"
            name="available"
            checked={form.available}
            onChange={handleChange}
          />
          موجود
        </label>
      </div>

      <h3>خروجی JSON:</h3>
      <pre style={{ background: "#f5f5f5", padding: "1rem", direction: "ltr" }}>
        {JSON.stringify(form, null, 2)}
      </pre>
    </div>
  );
};

export default AddProduct;
