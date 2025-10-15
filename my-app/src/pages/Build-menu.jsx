import "./../css/buildMenu.css";
import { useState } from "react";

const builderMenuData = {
  appetizer: [
    { id: "app1", name: "Bruschetta Classica", price: 12.99 },
    { id: "app2", name: "Antipasto Platter", price: 18.99 },
    { id: "app3", name: "Calamari Fritti", price: 14.99 },
    { id: "app4", name: "Caprese Salad", price: 13.99 },
  ],
  main: [
    { id: "main1", name: "Spaghetti Carbonara", price: 22.99 },
    { id: "main2", name: "Margherita Pizza", price: 18.99 },
    { id: "main3", name: "Chicken Parmigiana", price: 26.99 },
    { id: "main4", name: "Branzino Mediterranean", price: 28.99 },
    { id: "main5", name: "Osso Buco", price: 32.99 },
  ],
  dessert: [
    { id: "dessert1", name: "Tiramisu", price: 8.99 },
    { id: "dessert2", name: "Panna Cotta", price: 7.99 },
    { id: "dessert3", name: "Cannoli", price: 9.99 },
    { id: "dessert4", name: "Gelato Selection", price: 6.99 },
  ],
  beverage: [
    { id: "bev1", name: "Italian Wine (Glass)", price: 8.99 },
    { id: "bev2", name: "Sparkling Water", price: 3.99 },
    { id: "bev3", name: "Espresso", price: 4.99 },
    { id: "bev4", name: "Italian Soda", price: 4.99 },
  ],
};

const courseLabels = {
  appetizer: "Appetizer",
  main: "Main Course",
  dessert: "Dessert",
  beverage: "Beverage",
};

const servingOptions = [
  { value: 1, label: "1 Person" },
  { value: 2, label: "2 People" },
  { value: 4, label: "4 People" },
  { value: 6, label: "6 People" },
  { value: 8, label: "8 People" },
  { value: 10, label: "10+ People" },
];

const BuildMenu = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selections, setSelections] = useState({});
  const [menuName, setMenuName] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [servingSize, setServingSize] = useState(1);

  // Handle course checkbox change
  const handleCourseChange = (e) => {
    const course = e.target.value;
    if (e.target.checked) {
      setSelectedCourses((prev) => [...prev, course]);
    } else {
      setSelectedCourses((prev) => prev.filter((c) => c !== course));
      setSelections((prev) => {
        const newSelections = { ...prev };
        delete newSelections[course];
        return newSelections;
      });
    }
  };

  // Handle item radio change
  const handleItemSelect = (course, itemId) => {
    setSelections((prev) => ({
      ...prev,
      [course]: itemId,
    }));
  };

  // Handle menu name change
  const handleMenuNameChange = (e) => setMenuName(e.target.value);

  // Handle special requests change
  const handleSpecialRequestsChange = (e) => setSpecialRequests(e.target.value);

  // Handle serving size change
  const handleServingSizeChange = (e) => setServingSize(Number(e.target.value));

  // Reset all
  const handleReset = () => {
    setSelectedCourses([]);
    setSelections({});
    setMenuName("");
    setSpecialRequests("");
    setServingSize(1);
  };

  // Save menu
  const handleSave = () => {
    if (selectedCourses.length === 0 || !selectedCourses.every((c) => selections[c])) {
      alert("Please select at least one item for each chosen course.");
      return;
    }
    let totalPrice = 0;
    const menuItems = selectedCourses.map((course) => {
      const item = builderMenuData[course].find((i) => i.id === selections[course]);
      const price = item.price * servingSize;
      totalPrice += price;
      return { course: courseLabels[course], name: item.name, price };
    });
    let msg = `Menu saved successfully!\n\n${menuName || "My Custom Menu"}\nFor ${servingSize} people\nTotal: $${totalPrice.toFixed(2)}\n\nItems:\n`;
    menuItems.forEach((item) => {
      msg += `- ${item.course}: ${item.name} ($${item.price.toFixed(2)})\n`;
    });
    if (specialRequests) msg += `\nSpecial Requests: ${specialRequests}`;
    alert(msg);
    // You can send menu data to backend here
  };

  // Calculate preview
  let totalPrice = 0;
  let previewHTML;
  if (selectedCourses.length === 0) {
    previewHTML = (
      <div className="preview-empty">
        <p>Select courses to see your menu preview</p>
      </div>
    );
  } else {
    previewHTML = (
      <>
        <div className="preview-menu-name">
          <h4>{menuName || "My Custom Menu"}</h4>
        </div>
        {selectedCourses.map((course) => {
          const selectedItemId = selections[course];
          const courseName = courseLabels[course];
          let itemPreview;
          if (selectedItemId) {
            const item = builderMenuData[course].find((i) => i.id === selectedItemId);
            const itemPrice = item.price * servingSize;
            totalPrice += itemPrice;
            itemPreview = (
              <div className="preview-item">
                <span className="preview-item-name">{item.name}</span>
                <span className="preview-item-price">${itemPrice.toFixed(2)}</span>
              </div>
            );
          } else {
            itemPreview = (
              <div className="preview-item">
                <em>No selection made</em>
              </div>
            );
          }
          return (
            <div className="preview-course" key={course}>
              <div className="preview-course-title">{courseName}</div>
              {itemPreview}
            </div>
          );
        })}
        {servingSize > 1 && (
          <div className="preview-serving-info">
            <small>Prices shown for {servingSize} people</small>
          </div>
        )}
      </>
    );
  }

  // Save button enabled only if all selected courses have a selection
  const saveEnabled =
    selectedCourses.length > 0 &&
    selectedCourses.every((course) => selections[course]);

  return (
    <main>
      <section className="build-hero">
        <div className="container">
          <h1>Build Your Custom Menu</h1>
          <p>
            Create a personalized dining experience by selecting your favorite dishes
          </p>
        </div>
      </section>

      <section className="build-content">
        <div className="container">
          <div className="build-layout">
            <div className="menu-builder">
              <div className="builder-step">
                <h3>Step 1: Choose Your Courses</h3>
                <div className="course-selector">
                  {Object.keys(builderMenuData).map((course) => (
                    <div className="course-option" key={course}>
                      <input
                        type="checkbox"
                        id={course}
                        name="courses"
                        value={course}
                        checked={selectedCourses.includes(course)}
                        onChange={handleCourseChange}
                      />
                      <label htmlFor={course}>{courseLabels[course]}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="builder-step">
                <h3>Step 2: Select Items for Each Course</h3>
                <div className="course-selections">
                  {selectedCourses.map((course) => (
                    <div className="course-section" key={course}>
                      <h4>{courseLabels[course]}</h4>
                      <div className="course-items">
                        {builderMenuData[course].map((item) => (
                          <div className="course-item" key={item.id}>
                            <input
                              type="radio"
                              id={item.id}
                              name={course}
                              value={item.id}
                              checked={selections[course] === item.id}
                              onChange={() => handleItemSelect(course, item.id)}
                            />
                            <label htmlFor={item.id}>
                              <div className="course-item-info">
                                <div className="course-item-name">{item.name}</div>
                                <div className="course-item-price">${item.price.toFixed(2)}</div>
                              </div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="builder-step">
                <h3>Step 3: Customize Your Menu</h3>
                <div className="customization-options">
                  <div className="option-group">
                    <label htmlFor="menuName">Menu Name:</label>
                    <input
                      type="text"
                      id="menuName"
                      placeholder="My Custom Menu"
                      className="form-input"
                      value={menuName}
                      onChange={handleMenuNameChange}
                    />
                  </div>
                  <div className="option-group">
                    <label htmlFor="specialRequests">Special Requests:</label>
                    <textarea
                      id="specialRequests"
                      placeholder="Any dietary restrictions or special requests..."
                      className="form-textarea"
                      value={specialRequests}
                      onChange={handleSpecialRequestsChange}
                    ></textarea>
                  </div>
                  <div className="option-group">
                    <label htmlFor="servingSize">Number of People:</label>
                    <select
                      id="servingSize"
                      className="form-select"
                      value={servingSize}
                      onChange={handleServingSizeChange}
                    >
                      {servingOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="menu-preview">
              <div className="preview-header">
                <h3>Menu Preview</h3>
                <span className="preview-price" id="previewPrice">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="preview-content" id="previewContent">
                {previewHTML}
              </div>

              <div className="preview-footer">
                <button
                  className="btn btn-secondary"
                  id="resetMenu"
                  onClick={handleReset}
                  type="button"
                >
                  Reset Menu
                </button>
                <button
                  className="btn btn-primary"
                  id="saveMenu"
                  onClick={handleSave}
                  disabled={!saveEnabled}
                  type="button"
                >
                  Save Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BuildMenu;