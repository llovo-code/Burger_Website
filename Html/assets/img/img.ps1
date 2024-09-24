$urls= @(
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/contact-man.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/delivery-burger.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/favicon.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/home-burger.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/home-dish.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/home-lettuce.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/home-potato.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/home-tomato.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/logo-burger.svg",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/popular-burger-big.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/popular-burger-chicken.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/popular-burger-classic.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/popular-burger-grill.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/popular-burger-meat.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/recipe-bread.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/recipe-burger.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/recipe-cheese.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/recipe-meat.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/recipe-sauces.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/recipe-vegetable.png",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/sticker-burger.svg",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/sticker-glass.svg",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/sticker-potatoes.svg",
  "https://raw.githubusercontent.com/bedimcode/responsive-burger-website/main/assets/img/sticker-soda.svg"
)
foreach ($url in $urls) {
  Invoke-WebRequest -Uri $url -OutFile (Split-Path -Leaf $url)
}