<template>
  <footer class="footer valign-wrapper">
      <div class="footer__inner">
        <nav class="footer__nav">
          <!-- GitHub SVG -->
          <a class="footer__icon" href="https://github.com/vapurrmaid">
            <svg aria-labelledby="gh-mark-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title id="gh-mark-icon" lang="en">GitHub icon</title>
                <path fill="#FFFFFF" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </a>
          <!-- Medium.com SVG -->
          <a class="footer__icon" href="https://medium.com/@vapurrmaid">
            <svg aria-labelledby="medium-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title id="medium-icon" lang="en">Medium icon</title>
              <path fill="#FFFFFF" d="M2.846 6.36c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403H7.26l5.378 11.795 4.728-11.795H24v.403l-1.917 1.837c-.165.126-.247.333-.213.538v13.5c-.034.204.048.41.213.537l1.87 1.837v.403h-9.41v-.403l1.937-1.882c.19-.19.19-.246.19-.538V7.794l-5.39 13.688h-.727L4.278 7.794v9.174c-.052.386.076.774.347 1.053l2.52 3.06v.402H0v-.403l2.52-3.06c.27-.278.39-.67.326-1.052V6.36z"></path>
            </svg>
          </a>
          <!-- Mixcloud.com SVG -->
          <a class="footer__icon" href="https://mixcloud.com/vapurrmaid/uploads">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400 400" enable-background="new 0 0 400 400" xml:space="preserve">
              <title id="mixcloud-icon" lang="en">Mixcloud icon</title>
              <g>
                <g><path fill="#25292B" d="M316,282.5c-1.8,0-3.6-0.5-5.2-1.6c-4.3-2.9-5.4-8.7-2.6-12.9c8.6-12.8,13.1-27.8,13.1-43.4 c0-15.6-4.5-30.6-13.1-43.4c-2.9-4.3-1.7-10.1,2.5-12.9c4.3-2.9,10-1.7,12.9,2.5c10.7,15.9,16.3,34.5,16.3,53.8 c0,19.3-5.6,37.9-16.3,53.8C321.9,281.1,319,282.5,316,282.5L316,282.5z"/></g>
                <g><path fill="#25292B" d="M289.3,267.4c-1.8,0-3.6-0.5-5.2-1.6c-4.3-2.9-5.4-8.7-2.5-12.9c5.7-8.4,8.7-18.1,8.7-28.3 c0-10.1-3-19.9-8.7-28.3c-2.9-4.3-1.8-10,2.5-12.9c4.3-2.9,10-1.8,12.9,2.5c7.8,11.5,11.9,24.9,11.9,38.7 c0,13.9-4.1,27.3-11.9,38.7C295.3,266,292.3,267.4,289.3,267.4L289.3,267.4z"/></g>
                <path fill="#25292B" d="M245.8,184c-3.7-37.3-35.2-66.5-73.5-66.5c-31.7,0-59.8,20.4-69.9,50c-23.9,3.5-42.4,24.1-42.4,49 c0,27.3,22.3,49.6,49.7,49.6h127.2c22.9,0,41.6-18.6,41.6-41.5C278.5,204.7,264.5,188.1,245.8,184z M236.9,247.5H109.7 c-17.1,0-31.1-13.9-31.1-31c0-17.1,13.9-31,31.1-31c8.3,0,16.1,3.2,22,9.1c3.6,3.6,9.5,3.6,13.2,0c3.6-3.6,3.6-9.5,0-13.2 c-6.4-6.4-14.3-10.8-22.9-13c8.8-19.4,28.4-32.4,50.3-32.4c30.5,0,55.3,24.8,55.3,55.2c0,5.9-0.9,11.7-2.8,17.3 c-1.6,4.9,1,10.1,5.9,11.8c1,0.3,2,0.5,2.9,0.5c3.9,0,7.5-2.5,8.8-6.4c1.2-3.7,2.1-7.4,2.7-11.2c8.6,3.3,14.7,11.6,14.7,21.3 C259.9,237.2,249.5,247.5,236.9,247.5z"/>
              </g>
            </svg>
          </a>
        </nav>

        <p class="footer__copyright font-size--default">Copyright &copy; 2018 Grey Barkans</p>
      </div>
    </footer>
</template>

<style>
.footer {
  padding: 2rem;

}

.footer__inner {
  width: 80%;
}

.footer__nav {
  height: initial !important; /* override materialize */
  width: initial !important; /* override materialize */
  background-color: inherit;
  box-shadow: none !important; /* override materialize */
  float: right;
  text-align: center;
}

.footer__icon {
  margin: 0 5px;
}

.footer__icon svg {
  width: 1.8rem;
  height: 1.8rem;
}

.footer__copyright {
  float: left;
}

@media only screen and (max-width: 400px) {
  .footer__copyright { font-size: 1.2rem; }
}
</style>