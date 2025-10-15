import './../css/new-menu.css';
import NewMenu from "../component/forms/NewMenu";


const NewMenuPage = () => {
  return (
    <main>
      <section className='menu-hero'>
        <div class="container">
          <h1>New Menu Item</h1>
          <p>Use the form below to add a new item to the menu.</p>
        </div>
      </section>
       <section class="contact-content">
            <div class="container">
                <div class="contact-layout">
                    <div class="contact-form-section">
                        <h2>
                            Add New Menu Item
                        </h2>
                        <NewMenu />
                    </div>

                    
                </div>
            </div>
      </section>
    </main>
  );
};

export default NewMenuPage;