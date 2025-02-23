bplist00�_WebMainResource�	
_WebResourceTextEncodingName_WebResourceData_WebResourceMIMEType_WebResourceFrameName^WebResourceURLUutf-8O'7<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; color: #000000; -webkit-text-stroke: #000000}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">/* js/script.js */</span></p>
<p class="p1"><span class="s1">document.addEventListener('DOMContentLoaded', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Smooth scrolling</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>document.querySelectorAll('nav a').forEach(anchor =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>anchor.addEventListener('click', function(e) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>e.preventDefault();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>document.querySelector(this.getAttribute('href')).scrollIntoView({</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>behavior: 'smooth',</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>block: 'start'</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>if (window.innerWidth &lt;= 768) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>document.querySelector('.nav-menu').classList.remove('active');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Mobile menu toggle</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const navToggle = document.querySelector('.nav-toggle');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const navMenu = document.querySelector('.nav-menu');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>navToggle.addEventListener('click', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>navMenu.classList.toggle('active');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Animate elements on scroll</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const observer = new IntersectionObserver((entries) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>entries.forEach(entry =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>if (entry.isIntersecting) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>entry.target.classList.add('animate-in');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>if (entry.target.classList.contains('service-box')) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>entry.target.style.animationDelay = `${Math.random() * 0.3}s`;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}, { threshold: 0.2 });</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>document.querySelectorAll('section, .service-box, .contact-info').forEach(el =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>observer.observe(el);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Nav scroll effect</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const nav = document.querySelector('nav');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>window.addEventListener('scroll', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (window.scrollY &gt; 100) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>nav.classList.add('scrolled');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>nav.classList.remove('scrolled');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Random color hover effect</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const serviceBoxes = document.querySelectorAll('.service-box');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const colors = ['#ffeaa7', '#55efc4', '#81ecec', '#ff7675'];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>serviceBoxes.forEach(box =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>box.addEventListener('mouseenter', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>box.addEventListener('mouseleave', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>box.style.backgroundColor = '#fff';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">// Dynamic styles</span></p>
<p class="p1"><span class="s1">const styleSheet = document.createElement('style');</span></p>
<p class="p1"><span class="s1">styleSheet.textContent = `</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>.animate-in {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>animation: slideUp 0.8s ease-out forwards;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>.service-box {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>opacity: 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>transform: translateY(40px) rotate(-5deg);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>.service-box.animate-in {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>opacity: 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>transform: translateY(0) rotate(0deg);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>nav.scrolled {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>background: rgba(0, 184, 148, 0.95);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>padding: 0.8rem;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>transform: scale(0.98);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">`;</span></p>
<p class="p1"><span class="s1">document.head.appendChild(styleSheet);</span></p>
</body>
</html>
Ytext/htmlP_file:///index.html    ( F X n � � �'�'�'�                           '�