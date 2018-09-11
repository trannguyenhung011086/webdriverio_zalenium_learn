# Suggest automation framework

[Zalenium - A flexible and scalable Selenium Grid.](https://opensource.zalando.com/zalenium/) + [WebdriverIO - WebDriver bindings for Node.js](http://webdriver.io/)

- Why use Zalenium: create Selenium Grid very quick and can expand to SauceLabs later for more cross-browser testing
- Why use Webdriverio: provide easy-to-use API commands wrapped over Selenium and Appium (which can be used for automate mobile app later)

## Use Zalenium
```bash
# pull docker images
docker pull elgalu/selenium
docker pull dosel/zalenium

# start
docker run --rm -ti --name zalenium -p 4444:4444 \
      -v /var/run/docker.sock:/var/run/docker.sock \
      -v /tmp/videos:/home/seluser/videos \
      --privileged dosel/zalenium start --maxTestSessions 5 --desiredContainers 5
      
# stop
docker stop zalenium
```

- grid console: http://localhost:4444/grid/console
- dashboard: http://localhost:4444/dashboard
- live preview: http://localhost:4444/grid/admin/live

Article: [Tried Zalenium to run Selenium tests on scalable containers - DEV Community 👩‍💻👨‍💻](https://dev.to/bufferings/tried-zalenium-to-run-selenium-tests-on-scalable-containers-2n7c)