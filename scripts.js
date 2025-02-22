bplist00�_WebMainResource�	
_WebResourceFrameName^WebResourceURL_WebResourceTextEncodingName_WebResourceData_WebResourceMIMETypeP_file:///index.htmlUutf-8O�<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">// script.js</p>
<p class="p1">document.addEventListener('DOMContentLoaded', () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>// Smooth scrolling</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.querySelectorAll('nav a').forEach(anchor =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>anchor.addEventListener('click', function(e) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>e.preventDefault();</p>
<p class="p1"><span class="Apple-converted-space">            </span>document.querySelector(this.getAttribute('href')).scrollIntoView({</p>
<p class="p1"><span class="Apple-converted-space">                </span>behavior: 'smooth',</p>
<p class="p1"><span class="Apple-converted-space">                </span>block: 'start'</p>
<p class="p1"><span class="Apple-converted-space">            </span>});</p>
<p class="p1"><span class="Apple-converted-space">        </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Animate elements on scroll</p>
<p class="p1"><span class="Apple-converted-space">    </span>const observer = new IntersectionObserver((entries) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>entries.forEach(entry =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">            </span>if (entry.isIntersecting) {</p>
<p class="p1"><span class="Apple-converted-space">                </span>entry.target.classList.add('animate-in');</p>
<p class="p1"><span class="Apple-converted-space">                </span>if (entry.target.classList.contains('service-box')) {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>entry.target.style.animationDelay = `${Math.random() * 0.3}s`;</p>
<p class="p1"><span class="Apple-converted-space">                </span>}</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>}, { threshold: 0.2 });</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>document.querySelectorAll('section, .service-box, .contact-info').forEach(el =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>observer.observe(el);</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Nav scroll effect</p>
<p class="p1"><span class="Apple-converted-space">    </span>const nav = document.querySelector('nav');</p>
<p class="p1"><span class="Apple-converted-space">    </span>window.addEventListener('scroll', () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>if (window.scrollY &gt; 100) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>nav.classList.add('scrolled');</p>
<p class="p1"><span class="Apple-converted-space">        </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">            </span>nav.classList.remove('scrolled');</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Random color hover effect for fun</p>
<p class="p1"><span class="Apple-converted-space">    </span>const serviceBoxes = document.querySelectorAll('.service-box');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const colors = ['#ffeaa7', '#55efc4', '#81ecec', '#ff7675'];</p>
<p class="p1"><span class="Apple-converted-space">    </span>serviceBoxes.forEach(box =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>box.addEventListener('mouseenter', () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">            </span>box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];</p>
<p class="p1"><span class="Apple-converted-space">        </span>});</p>
<p class="p1"><span class="Apple-converted-space">        </span>box.addEventListener('mouseleave', () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">            </span>box.style.backgroundColor = '#fff';</p>
<p class="p1"><span class="Apple-converted-space">        </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">// Add to styles.css dynamically</p>
<p class="p1">const styleSheet = document.createElement('style');</p>
<p class="p1">styleSheet.textContent = `</p>
<p class="p1"><span class="Apple-converted-space">    </span>.animate-in {</p>
<p class="p1"><span class="Apple-converted-space">        </span>animation: slideUp 0.8s ease-out forwards;</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>.service-box {</p>
<p class="p1"><span class="Apple-converted-space">        </span>opacity: 0;</p>
<p class="p1"><span class="Apple-converted-space">        </span>transform: translateY(40px) rotate(-5deg);</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>.service-box.animate-in {</p>
<p class="p1"><span class="Apple-converted-space">        </span>opacity: 1;</p>
<p class="p1"><span class="Apple-converted-space">        </span>transform: translateY(0) rotate(0deg);</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>nav.scrolled {</p>
<p class="p1"><span class="Apple-converted-space">        </span>background: rgba(0, 184, 148, 0.95);</p>
<p class="p1"><span class="Apple-converted-space">        </span>padding: 1rem;</p>
<p class="p1"><span class="Apple-converted-space">        </span>transform: scale(0.98);</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">`;</p>
<p class="p1">document.head.appendChild(styleSheet);</p>
</body>
</html>
Ytext/html    ( ? N l ~ � � � �R                           \