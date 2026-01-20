
import { mobileMenu } from "./components/menu";
import { initMagazineSlider } from "./components/sliders";

document.addEventListener("DOMContentLoaded", () => {
  // Mobil menüyü etkinleştir
  mobileMenu();
  // Slider
  initMagazineSlider();
});
