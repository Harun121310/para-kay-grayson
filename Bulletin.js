const quotes = [
"Success is not final, failure is not fatal: it is the courage to continue that counts.",
"Believe you can and you're halfway there.",
"Dream big. Start small. Act now.",
"What you do today can improve all your tomorrows.",
"It always seems impossible until it's done.",
"Do something today that your future self will thank you for.",
"Start where you are. Use what you have. Do what you can.",
"Doubt kills more dreams than failure ever will.",
"Every moment is a fresh beginning.",
"Keep going. Everything you need will come at the perfect time.",
"Be stronger than your excuses.",
"You are capable of amazing things.",
"Don’t stop until you’re proud.",
"Focus on the step in front of you, not the whole staircase.",
"Small progress is still progress.",
"Your only limit is your mind.",
"You don’t have to be perfect to be amazing.",
"Don’t let yesterday take up too much of today.",
"The harder you work for something, the greater you’ll feel when you achieve it.",
"Success is the sum of small efforts repeated day in and day out.",
"Believe in yourself and you will be unstoppable.",
"Consistency is what transforms average into excellence.",
"Failure is part of the process. Keep going.",
"Everything you’ve ever wanted is on the other side of fear.",
"Push yourself, because no one else is going to do it for you.",
"Don’t wait for the right moment; make the moment right.",
"Be a warrior, not a worrier.",
"The secret to getting ahead is getting started.",
"Great things never come from comfort zones.",
"Mistakes are proof that you are trying.",
"The future depends on what you do today.",
"You don’t grow when you’re comfortable.",
"Discipline is choosing what you want most over what you want now.",
"Don’t be afraid to give up the good to go for the great.",
"Success starts with self-discipline.",
"Difficult roads often lead to beautiful destinations.",
"If you get tired, learn to rest, not quit.",
"Don’t count the days; make the days count.",
"Believe in your infinite potential.",
"Take the risk or lose the chance.",
"Do more of what makes you happy.",
"Everything happens for a reason.",
"You didn’t come this far to only come this far.",
"One day or day one — you decide.",
"Don’t wish for it. Work for it.",
"Prove them wrong.",
"Your life is as good as your mindset.",
"Pain is temporary. Quitting lasts forever.",
"Grow through what you go through.",
"Success is not for the lazy.","The best way to predict your future is to create it.",
"Learn from yesterday, live for today, hope for tomorrow.",
"Hard work beats talent when talent doesn’t work hard.",
"Your vibe attracts your tribe.",
"Be the reason someone smiles today.",
"Live less out of habit and more out of intent.",
"Strive for progress, not perfection.",
"Life begins at the end of your comfort zone.",
"You are stronger than you think.",
"Progress, not excuses.",
"Stay positive, work hard, make it happen.",
"Persistence guarantees results.",
"If it doesn’t challenge you, it doesn’t change you.",
"A little progress each day adds up to big results.",
"Turn your can't into can and dreams into plans.",
"Be kind to yourself.",
"Success is a journey, not a destination.",
"Stay focused and never give up.",
"Your best teacher is your last mistake.",
"Life is tough, but so are you.",
"Don't limit your challenges — challenge your limits.",
"What you think, you become.",
"Act as if what you do makes a difference. It does.",
"Courage doesn’t mean you don’t get afraid; it means you don’t let fear stop you.",
"Let your dreams be bigger than your fears.",
"Always do your best.",
"Don’t let small minds convince you your dreams are too big.",
"Wake up with determination; go to bed with satisfaction.",
"Dare to be different.",
"Stay patient and trust your journey.",
"Your potential is endless.",
"You become what you believe.",
"Difficult doesn't mean impossible.",
"Be humble. Be hungry. Be fearless.",
"Fear is a reaction. Courage is a decision.",
"Quality is not an act; it is a habit.",
"Collect moments, not things.",
"Don’t let the fear of losing keep you from winning.",
"Work hard in silence, let success make the noise.",
"Where focus goes, energy flows.",
"Don’t stop until you get there.",
"Great achievements begin with great mindset.",
"It’s never too late to start again.",
"Do it with passion or not at all.",
"Your dreams don’t work unless you do.",
"Make today count.",
"Expect nothing. Appreciate everything.",
"You have the power to change your story.",
"Stronger every day.",
"Be brave enough to start.",
  ];

  function updateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteBox").textContent = quotes[randomIndex];
}

setInterval(updateQuote, 3600000);
updateQuote();

let time = document.getElementById("time");
 let date = document.getElementById("date");
  setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
    date.innerHTML = d.toLocaleDateString();
  },1000);

  const apiKey = "e44aba5723cffe6b7ae7abef3caed807";  
const city = "Bacoor";  

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {

    document.getElementById("weatherIcon").src =
      `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

document.getElementById("temperature").textContent = data.main.temp + "°C";

  })
  .catch(err => {
    console.log("Weather fetch error:", err);
  });