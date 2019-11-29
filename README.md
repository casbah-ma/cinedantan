<p align="center">
  <a href="https://cinedantan.com">
    <img src="https://cinedantan.com/logo192.png" />
  </a>
</p>

# Hello there!

Cinedantan is a friendly and searchable library of public domain movies. 

![](https://cdn.cinedantan.com/github/you-might-like.png)

It's a small React.js Progressive Web App. 

The movies dataset is a simple JSON file streamed into the redux store using 
the excellent [Oboe.js](http://oboejs.com/). It was created by combining multiple sources:
Archive.org, WikiData, Wikipedia, and IMDB.

The dataset is located here: 

    /public/database/movies.json

## Some Features
- Offline search engine (thanks to [flexsearch](https://github.com/nextapps-de/flexsearch) )
- Create and share your lists (This is done with no remote database or server)
- Continue Watching
- Personalized recommendations
- ChromeCast support
- ...

This App was built in less than 48h. I will do some refactoring and add tests very soon.