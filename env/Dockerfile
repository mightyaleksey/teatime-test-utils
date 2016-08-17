FROM ubuntu:trusty

# Add deps for Firefox
RUN echo "deb http://ppa.launchpad.net/mozillateam/firefox-next/ubuntu trusty main" > /etc/apt/sources.list.d//mozillateam-firefox-next-trusty.list
RUN apt-key adv --recv-key --keyserver keyserver.ubuntu.com 9BDB3D89CE49EC21

RUN apt-get update -qq
RUN apt-get install xvfb -qqy
RUN apt-get install firefox=48.0+build2-0ubuntu0.14.04.1 wget -qqy
RUN apt-mark hold firefox

RUN wget -O - https://deb.nodesource.com/setup_6.x | bash
RUN apt-get install nodejs openjdk-7-jre-headless -qqy

# Download selenium standalone server
RUN mkdir -p /usr/lib/selenium
RUN wget --output-document=/usr/lib/selenium/selenium-server-2.53.1.jar http://selenium-release.storage.googleapis.com/2.53/selenium-server-standalone-2.53.1.jar
RUN cd /usr/lib/selenium; ln -s selenium-server-2.53.1.jar selenium-server-standalone.jar
# Log dir for selenium
RUN mkdir -p /var/log/selenium
RUN chmod a+w /var/log/selenium

COPY selenium.init /etc/init.d/selenium
RUN chmod +x /etc/init.d/selenium
RUN update-rc.d selenium defaults

COPY launch.sh /usr/lib/launch.sh

WORKDIR /var/www/test

CMD (service selenium start; /usr/lib/launch.sh)
