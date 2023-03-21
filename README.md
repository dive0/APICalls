# Web Development Project 4 - *NASA's Astronomy Picture of the Day*

Submitted by: **Shi Wei Zheng**

This web app: **This project uses NASA's API, Astronomy Picture of the Day. It pulls data from the API and display the image along with it's attributes.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [x] **Only one item/API call is viewable at a time**
- [x] **API calls appear random to the user**
- [x] **At least one image is displayed per API call**
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
- [ ] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [x] Multiple types of attributes can be added to the ban list
- [x] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='./src/assets/Walkthrough.gif' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ShareX.  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
- I had a hard time trying to push the selected attributes to the ban list. I created the function to push to the list, and pass it as a prop to the child component, I kept getting an error when I tried to call the function. This had me stuck for a while. After further research, I found out that I had to make the component an arrow function instead of a regular function.
- Another challenge is also related to the ban list. When trying to use the attribute "image", I expect it to skip all the images and display the next video. That works if I only have the "image" attribute in the list. However, if I have multiple attributes, it displays all the images before the next video is queried. This situation does not happen with the other attributes and having multiple non-"image" attributes works the way they intended to work. I was not able to figure out the cause of this. It may be that most of the data in the API are images, and only a few are videos.

## License

    Copyright [2023] [Shi Wei Zheng]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.