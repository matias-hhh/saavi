FROM node:7

RUN mkdir -p /wiki
WORKDIR /wiki

COPY . /wiki
RUN npm install -g jingo@1.7.1

RUN git config --global user.name "saavi"
RUN git config --global user.email saavi@skilta.fi

RUN git init
