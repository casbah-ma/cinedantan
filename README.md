<p align="center">
  <a href="https://cinedantan.com">
    <img src="https://cinedantan.com/logo192.png" />
  </a>
</p>

# Hello there!

Cinedantan is a friendly and searchable library of public domain movies. 

![](https://cdn.cinedantan.com/github/you-might-like.png)

It's a small React.js Progressive Web App. 

The movies database is a simple JSON file streamed into the redux store using 
the excellent [Oboe.js](http://oboejs.com/) and built from different sources including 
Archive.org, WikiData, Wikipedia, and IMDB.

The database is located here: 

    /public/database/movies.json

## Some Features
- Offline search engine (thanks to [flexsearch](https://github.com/nextapps-de/flexsearch) )
- Add, remove or share your lists (serverless and using only the local storage and magic links)
- Continue Watching
- Recommendations
- ChromeCast support
- ...

This App was built in less than 48h. You may find some ugliness there...I will do some refactoring and add tests as soon as I can.