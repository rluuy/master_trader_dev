import React from 'react';

const About = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-10 pt-24 relative overflow-hidden">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-300 mb-4">About Us</h1>
        <p className="text-xl text-[#4678F5]">Insider trading for the public interest.</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Staff</h2>
        <div className="grid gap-6 justify-items-center justify-content-center justify-center">
        <div className="bg-[#16162F] p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-300 mb-2">Knowledgable Senator</h3>
            <p className="text-gray-600 mb-2">Nancy Pelosi</p>
            <div className="text-center">
            <img className="w-32 h-32 bg-gray-900 border-2 border-[#313147] rounded-full mx-auto mb-4" src="pelosi_icon.png" />
          </div>
            <p className="text-gray-300 text-left">Nancy Pelosi isn’t just a politician—she’s Wall Street’s favorite grandmother. With decades of political experience and an uncanny ability to pick winning stocks, she’s outperformed hedge fund managers, Reddit traders, and probably even Warren Buffett’s intern. Known for her high-yield portfolio and bullish attitude, Nancy’s stock picks often seem to move with perfect timing.
If you're looking for investment advice backed by experience and allegedly impeccable timing, Nancy is your go-to stock guru.
</p><br></br>
            <p className="text-gray-300 text-left">Nancy’s algorithm allegedly taps into her deep well of insider knowledge, using her uncanny ability to time the market like a seasoned pro. By following her trades on CapitolTrades.com, the algorithm predicts which stocks are bound to rise—just after she makes a move. By following Nancy’s advice you can make use of her extensive knowledge to outperform even the best traders on the market!</p>
          </div>
          <div className="bg-[#16162F] p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-300 mb-2">Opinionated Tycoon</h3>
            <p className="text-gray-600 mb-2">Marjorie Taylor Green</p>
            <div className="text-center">
            <img className="w-32 h-32 bg-gray-900 border-2 border-[#313147] rounded-full mx-auto mb-4" src="green_icon.png" />
          </div>
            <p className="text-gray-300 text-left">Marjorie Taylor Greene may not be as well-known as her counterpart, but she’s carving out her own space in the stock market with her bold moves. A rising star in the stock market, MTG’s recommendations are as bold and unconventional as her career. Known for her straight-shooting style, MTG's stock picks might surprise you, but don’t let her “lesser-known” status fool you—she’s got the guts to go all in on the next big opportunity. Whether you agree with her style or not, her fearless instinct for spotting opportunities in the market speaks for itself.</p><br></br>
            <p className="text-gray-300 text-left">MTG’s algorithm runs on pure conviction and boldness, don’t worry—there’s no insider knowledge here. By tracking her trades on CapitolTrades.com, the algorithm highlights her knack for spotting stocks that might fly under the radar, without any behind-the-scenes perks. It’s all about finding those surprise opportunities in the market!</p>
          </div>
          <div className="bg-[#16162F] p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-300 mb-2">Chill Business Guy</h3>
            <p className="text-gray-600 mb-2">John Fetterman</p>
            <div className="text-center">
            <img className="w-32 h-32 bg-gray-900 border-2 border-[#313147] rounded-full mx-auto mb-4" src="fetterman_icon.png" />
          </div>
            <p className="text-gray-300 text-left">If you had to describe John Fetterman with a single word, it would have to be: "John Fetterman." This cool cucumber is a down-to-earth pragmatist, making waves in Washington one cozy hoodie at a time. He's also known for making great picks at the stock exchange, garnering great respect from investors all around. John Fetterman's greatest downfall is that he is forgetful, sometimes forgetting conversations as they happen. That's part of what makes him so chill: he's a live and let live type of fellow.</p><br></br>
            <p className="text-gray-300 text-left">Fetterman's trading algorithm is based on his trading data in capitoltrades.com. By analyzing this data with artificial intelligence, the algorithm can mimic his picks and earn you money!</p>
          </div>
          <div className="bg-[#16162F] p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-300 mb-2">Eller Undergraduate</h3>
            <p className="text-gray-600 mb-2">Mark Louis Tosi</p>
            <div className="text-center">
            <img className="w-32 h-32 bg-gray-900 border-2 border-[#313147] rounded-full mx-auto mb-4" src="mark_icon.png" />
          </div>
            <p className="text-gray-300 text-left">Mark Louis Tosi isn’t the flashy, high-risk trader you see on TV—he’s the steady, passive investor who prefers to play it safe. Known for his unexciting and boring approach, Mark doesn’t rely on advanced knowledge and instead keeps it simple. While others chase hot tips and volatile stocks, Mark is perfectly content to watch his portfolio slowly grow in the background. If you’re looking for the next hot stock, Mark’s not your guy. But if you want something steady—He is happy to give you his advice.</p><br></br>
            <p className="text-gray-300 text-left">Mark’s algorithm follows the soundest investing advice, index funds. Nothing crazy, his recommendations will just spread your money around the market and let you forget about it.</p>
          </div>
          <div className="bg-[#16162F] p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-300 mb-2">Chicken</h3>
            <p className="text-gray-600 mb-2">Chicken</p>
            <div className="text-center">
            <img className="w-32 h-32 bg-gray-900 border-2 border-[#313147] rounded-full mx-auto mb-4" src="chicken_icon.png" />
          </div>
            <p className="text-gray-300 text-left">Chicken is no ordinary bird. With over 2000% returns in the past 5 years, this legendary trader has clucked their way to the top of the stock market. But don’t expect any flashy interviews or extravagant announcements—Chicken is known for being extremely secretive about their trades. They’ve built an empire by keeping things quiet, only offering a few carefully chosen tips to those who earn their trust. If you manage to crack the code and catch Chicken on a good day, you might just get the inside scoop that’s worth more than a lifetime supply of corn.</p><br></br>
            <p className="text-gray-300 text-left">Chicken’s algorithm? Well, that's a closely guarded secret. Rumor has it, it’s based on years of experience watching the world from a perch, seeing things others miss. All we know for sure is that it's legendary, and if you ever get a glimpse of it, consider yourself very lucky. Until then, you'll just have to trust the process... and hope for a little chicken luck!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;