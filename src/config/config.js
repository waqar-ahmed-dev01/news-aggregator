import moment from "moment";

export const brandTitle = "News Aggregator"

export const menu = [
    {title: "Business", link: "/categories/business"},
    {title: "Sports", link: "/categories/sports"},
    {title: "Science", link: "/categories/science" },
    {title: "Health", link: "/categories/health" },
    {title: "Entertainment", link: "/categories/entertainment" },
    {title: "Technology", link: "/categories/technology" },
]


export const pages = [
    { path: "/", category: "general" },
    { path: "/categories/business", category: "business" },
    { path: "/categories/sports", category: "sports", },
    { path: "/categories/science", category: "science", },
    { path: "/categories/health", category: "health", },
    { path: "/categories/entertainment", category: "entertainment" },
    { path: "/categories/technology", category: "technology" }
  ];


export const capitaLize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const dateForm = (date) => {
    return `${moment(date).format('LLL')}`
}