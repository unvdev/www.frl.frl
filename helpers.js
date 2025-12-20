    document.addEventListener("DOMContentLoaded", () => {
        // Recursive function to get the first non-default color
        function getEffectiveColor(el) {
            if (!el) return null;

            const color = getComputedStyle(el).color;
            // Check if color is not transparent/black
            if (color && color !== 'rgba(0, 0, 0, 0)' && color !== 'rgb(0, 0, 0)') {
                return color;
            }

            // Recursively check children
            for (const child of el.children) {
                const childColor = getEffectiveColor(child);
                if (childColor) return childColor;
            }

            return null; // fallback if nothing found
        }

        // Select all first children
        const firstChildren = document.querySelectorAll('.accordion-label > :first-child');

        firstChildren.forEach(accordionLabelText => {
            const color = getEffectiveColor(accordionLabelText);
            accordionLabelText.style.setProperty('--label-color', color);
        });

        var accordions = document.querySelectorAll(".accordion-label");
        for (var i = 0; i < accordions.length; i++) {
            accordions[i].onclick = function() {
                // The content div is the next sibling of the label
                var content = this.nextElementSibling;

                if (content.style.display === "block") {
                    // If it's visible, hide it
                    content.style.display = "none";
                    this.firstElementChild.classList.remove("accordion-active");
                } else {
                    // If it's hidden, show it
                    content.style.display = "block";
                    this.firstElementChild.classList.add("accordion-active");
                }
            };
        }

        const mediaQuery = window.matchMedia('(min-width: 640px)');

function handleTabletChange(e) {
  const myDiv = document.querySelector('.my-element');
  
  // Check if the media query is true
  if (e.matches) {
    // Screen is wide: Remove the class
    myDiv.classList.remove('mobile-only-class');
  } else {
    // Screen is narrow: Add the class back
    myDiv.classList.add('mobile-only-class');
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);
    });