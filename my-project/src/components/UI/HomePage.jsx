import { useState } from "react";
import mawarshop from "./../../assets/img/Shop-og.jpg";
import { Card } from "./Card";
import { ProDuctItems } from "../data/ProductItems";
import "../../assets/styles/homePage.css";

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState();
  const categories = [
    "All Products",
    "Top Sales",
    "Promo",
    "La Crystal",
    "Cleanser",
    "Toner",
    "Scrub",
  ];
  function handleClick(index) {
    setSelectedCategory(index);
  }
  console.log(selectedCategory);

  return (
    <div className="homepage-container">
      <section className="first-section">
        <p>Home</p>
        <i class="bi bi-chevron-compact-right"></i>
        <p>Cleanser</p>
        <i class="bi bi-chevron-compact-right"></i>
        <span className="flex gap-2 text-white">
          <i class="bi bi-basket-fill"></i>
          <p className="font-semibold">Mawar shop officail</p>
        </span>
      </section>

      <section className="second-section">
        <div className="flex">
          <div className="second-section-card1">
            <div className="flex">
              <img src={mawarshop} alt="mawar shop" className="card1-img" />
            </div>
            <div className="card1-title">
              <i class="bi bi-basket-fill text-sm"></i>
              <p className="text-sm">Mawar shop officail</p>
              <i class="bi bi-check-circle-fill flex-1 text-[#2080eb]"></i>
              <span className="flex text-[#22d64d]">
                <i class="bi bi-dot"></i>
                <p className="text-sm">online</p>
              </span>
            </div>
            <div className="card1-btn">
              <button className="follow-btn">Follow +</button>
              <button className="chat-btn">
                <span>Chat</span>
                <i class="bi bi-chat-text text-[#0a5eb8] ml-1"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-6 flex-wrap">
          <div className="second-section-card2">
            <div className="card2-detailswrap">
              <span>
                <i class="bi bi-kanban card2-details"></i>
                Products : <span className="text-[#1c80eb] ml-1">600</span>
              </span>
              <span>
                <i class="bi bi-person-check card2-details"></i>
                Following : <span className="text-[#1c80eb]">1.5k</span>
              </span>
              <span>
                <i class="bi bi-people card2-details"></i>
                Followers : <span className="text-[#1c80eb]">40.5k</span>
              </span>
            </div>
            <div className="card2-detailswrap2">
              <span>
                <i class="bi bi-chat-dots card2-details"></i>
                Chat Performance :<span className="text-[#1c80eb]">93% </span>
                <span className="text-[#8e8e8e] text-[12px]">
                  (within hours)
                </span>
              </span>
              <span>
                <i class="bi bi-star card2-details"></i>
                Rating : <span className="text-[#1c80eb]">4.9 </span>
                <span className="text-[#8e8e8e] text-[12px]">
                  (30.2k reviews)
                </span>
              </span>
              <span>
                <i class="bi bi-person-down card2-details"></i>
                Joined : <span className="text-[#1c80eb]">4 years ago</span>
              </span>
            </div>
          </div>

          <div className="flex gap-4 xl:flex-col">
            <div className="card3-container">
              <p>Awards for top shop</p>
              <i class="bi bi-award-fill text-xl"></i>
            </div>

            <div className="card3-container">
              <p>Best seller of the year</p>
              <i class="bi bi-shop-window text-xl"></i>
            </div>
          </div>

          <div className="card4-container">
            <div className="flex items-center px-2">
              <i class="bi bi-whatsapp mr-2 "></i>
              <p>+989129337758</p>
            </div>
            <div className="border"></div>
            <div className="flex items-center px-2">
              <i class="bi bi-instagram mr-2"></i>
              <p>Sepidehnil</p>
            </div>
            <div className="border"></div>
            <div className="flex items-center px-2">
              <i class="bi bi-linkedin mr-2"></i>
              <p>maednim </p>
            </div>
            <div className="border"></div>
            <div className="flex items-center px-2">
              <i class="bi bi-telegram mr-2"></i>
              <p>blasdff</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="card5-container">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`categories ${
                selectedCategory === index
                  ? "border-b-2 border-[#1c80eb] lg:border-none lg:bg-[#1c80eb]"
                  : "border-none"
              }`}
            >
              {category}
            </div>
          ))}
          <span>
            More
            <span>
              <i class="bi bi-chevron-down text-white text-[8px] ml-2"></i>
            </span>
          </span>
        </div>
      </section>

      <section className="flex gap-4 flex-wrap w-full py-8 ">
        {ProDuctItems.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            rate={item.rate}
            img={item.img}
            description={item.description}
            price={item.price}
          />
        ))}
      </section>
    </div>
  );
}
