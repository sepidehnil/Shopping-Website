import "../../assets/styles/sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <section className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <p className="subcategories-title">Category</p>
          <span>
            <i class="bi bi-chevron-down text-[#8e8e8e] text-[10px]"></i>
          </span>
        </div>
        <div className="flex items-center text-white gap-2 text-sm">
          <input
            type="checkbox"
            id="cleanser"
            name="cleanser"
            className="w-4 h-4"
          />
          <label id="cleanser">Cleanser</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="Toner" name="Toner" className="w-4 h-4" />
          <label id="Toner">Toner</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="Serum" name="Serum" className="w-4 h-4" />
          <label id="Serum">Serum</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="Moisturizer"
            name="Moisturizer"
            className="w-4 h-4"
          />
          <label id="Moisturizer">Moisturizer</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="Face mask"
            name="Face mask"
            className="w-4 h-4"
          />
          <label id="Face mask">Face mask</label>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-[#85a3e2] text-sm font-medium">Load more</p>
          <span>
            <i class="bi bi-chevron-down text-[#85a3e2] text-[10px]"></i>
          </span>
        </div>
      </section>

      <section className="flex flex-col justify-center gap-2">
        <div className="flex gap-4 items-center">
          <p className="flex items-center subcategories-title">Price</p>
          <span>
            <i class="bi bi-chevron-down text-[#8e8e8e] text-[10px]"></i>
          </span>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="high-low"
            name="high-low"
            className="w-4 h-4"
          />
          <label id="high-low">High to low</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="low-high"
            name="low-high"
            className="w-4 h-4"
          />
          <label id="low-high">Low to high</label>
        </div>
      </section>

      <section className="flex flex-col justify-center gap-2">
        <div className="flex gap-4 items-center">
          <p className="subcategories-title">Location</p>
          <span>
            <i class="bi bi-chevron-down text-[#8e8e8e] text-[10px]"></i>
          </span>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="nearest"
            name="nearest"
            className="w-4 h-4"
          />
          <label id="nearest">Nearest</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="farthest"
            name="farthest"
            className="w-4 h-4"
          />
          <label id="farthest">Farthest</label>
        </div>
      </section>

      <section className="flex flex-col justify-center gap-2">
        <div className="flex gap-4 items-center">
          <p className="subcategories-title">Rating</p>
          <span>
            <i class="bi bi-chevron-down text-[#8e8e8e] text-[10px]"></i>
          </span>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="highest"
            name="highest"
            className="w-4 h-4"
          />
          <label id="highest">Highest</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="lowest"
            name="lowest"
            className="w-4 h-4"
          />
          <label id="lowest">Lowest</label>
        </div>
      </section>

      <section className="flex flex-col justify-center gap-2">
        <div className="flex gap-4 items-center">
          <p className="subcategories-title">Shipping</p>
          <span>
            <i class="bi bi-chevron-down text-[#8e8e8e] text-[10px]"></i>
          </span>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="regular"
            name="regular"
            className="w-4 h-4"
          />
          <label id="regular">Regular</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="next-day"
            name="next-day"
            className="w-4 h-4"
          />
          <label id="next-day">Next day</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="same-day"
            name="same-day"
            className="w-4 h-4"
          />
          <label id="same-day">Same day</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="instant"
            name="instant"
            className="w-4 h-4"
          />
          <label id="instant">Instant</label>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-[#85a3e2] text-sm font-medium">Load more</p>
          <span>
            <i class="bi bi-chevron-down text-[#85a3e2] text-[10px]"></i>
          </span>
        </div>
      </section>

      <section className="flex flex-col justify-center gap-2">
        <div className="flex gap-4 items-center">
          <p className="subcategories-title">Payment</p>
          <span>
            <i class="bi bi-chevron-down text-[#8e8e8e] text-[10px]"></i>
          </span>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="debit" name="debit" className="w-4 h-4" />
          <label id="debit">Debit card</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="Credit"
            name="Credit"
            className="w-4 h-4"
          />
          <label id="Credit">Credit card</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="paypal"
            name="paypal"
            className="w-4 h-4"
          />
          <label id="paypal">Paypal</label>
        </div>
      </section>
    </div>
  );
}
