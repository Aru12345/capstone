# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#User

hannah=User.create!(name:"Hannah",email:"hannah@gmail.com")
joe=User.create!(name:"Joe",email:"joe@gmail.com")
selena=User.create!(name:"Selena",email:"selena@gmail.com")

puts "Done user"


#Restaurant

daniel=Restaurant.create(name: "Daniel",cuisine: "French Restaurant",cost: "$$$$",address: "60 E 65th St, New York, NY 10065, United States",hours: "5-9:45pm",closed:"Monday closed",phone: "+(1) 212-288-0033",must_try:"Soupe à l’oignon,Chocolate soufflé,Coq au vin",category:"alc",website:"https://www.danielnyc.com/",image:"https://cdn.vox-cdn.com/thumbor/sD1NYldxSFfdF0eGZItfYHK3vAE=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21917204/RD_MDR_FrancescoTonelli1.jpg")
ksh=Restaurant.create(name:"COTE Korean Steakhouse",cuisine:"Steak House",cost: "$$$$",address: "16 W 22nd St, New York, NY 10010, United States",hours: "5-11pm",closed:"Open all days",phone: "+1 212-401-7986",must_try: "Beef Manhattan,Pot Roast",category:"alc",website:"https://www.cotenyc.com/",image:"https://i.pinimg.com/originals/76/38/26/763826ba948e44274b2194a02228eeba.jpg")
sn=Restaurant.create(name:"Sushi Nakazawa",cuisine:"Sushi Restaurant",cost: "$$$",address:"23 Commerce St, New York, NY 10014, United States",hours: "11:30am-2pm & 5pm-10:30pm",closed: "Open all days",phone: "+1 212-924-2212",must_try: "King Crab Roll ,Boston Roll,Rainbow Roll",category:"alc",website:"https://www.sushinakazawa.com/",image:"https://nypost.com/wp-content/uploads/sites/2/2014/02/sushi.jpg?quality=75&strip=all")
cir=Restaurant.create(name:"Carmine's Italian Restaurant - Times Square",cost:"$$",address:"200 W 44th St, New York, NY 10036, United States",hours: "11:30am-11-pm",closed:"Open all days",phone:"+1 212-221-3800",must_try:"Spaghetti carbonara, Fritto Misto,Pesto Pizza",category:"alc",website:"https://www.carminesnyc.com/",image:"https://cdn.vox-cdn.com/thumbor/bigr3rAWckq1s4ybdhYFq0GO13Q=/0x0:967x678/1200x800/filters:focal(407x262:561x416)/cdn.vox-cdn.com/uploads/chorus_image/image/69883137/Screen_Shot_2021_09_20_at_11.30.30_AM.0.png")
ci=Restaurant.create(name:"Café Integral",cuisine:"Cafe",cost:"$",address:"149 Elizabeth St, New York, NY 10012, United States",hours:"8am-6:30pm",closed:"Open all days",phone:"+1 212-221-3813",must_try:"S'mores,New York cheesecake,Hot Chocolate",category:"coffeeshop",website:"https://www.cafeintegral.com/",image:"https://sprudge.com/wp-content/uploads/2016/10/NYC_Cafe_Integral_Kat_Odell_LC_Photos-5-740x494.jpg")
fr=Restaurant.create(name:"Felix Roasting Co.",cuisine:"Cafe",cost:"$",address:"450 Park Ave S, New York, NY 10016, United States",hours:"8am -5pm",closed:"Saturdays closed",phone:"+1 212-401-7985",must_try:"Lemon meringue pie,Coconut Yogurt cake,English Breakfast Tea",category:"coffeeshop",website:"https://felixroastingco.com/",image:"https://yorkavenueblog.com/wp-content/uploads/2019/05/Felix-Roasting-Co.-NYC-7698.jpg")
blmwc=Restaurant.create(name:"Bluestone Lane Manhattan West Café",cuisine:"Cafe",cost:"$$",address:"435 W 31st St, New York, NY 10001, United States",hours:"7am-4pm",closed:"Saturday & Sunday 7:30am-4pm",phone:"+1 212-401-1246",must_try:"Matcha Cheesecake,Caramel Vanilla coffee",category:"coffeeshop",website:"https://bluestonelane.com/cafes/manhattan-west-435-w31st-st-new-york/?y_source=1_ODc5Mjg5MS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",image:"https://bluestonelane.com/wp-content/uploads/2017/09/DSC6627-1280x854.jpg")

uqc=Restaurant.create(name:"Union Square Cafe",cuisine:"Cafe",cost:"$$",address:"101 E 19th St, New York, NY 10003, United States",hours:"10am-10:pm",closed:"Wednesday closed",phone:"+1 212-243-4020",must_try:" Chicken fried steak,HotDog,Mac and Cheese",category:"coffeeshop",website:"https://www.unionsquarecafe.com/",image:"https://media.vanityfair.com/photos/586ff60d6cbc6a28245ef9a6/7:3/w_1994,h_854,c_limit/union-square-cafe-danny-meyers.jpg")
act=Restaurant.create(name:"Apotheke Chinatown",cuisine:"Sichuhan,Cocktail Bar",cost:"$$$",address:" 9 Doyers St, New York, NY 10013, United States",hours:"6:30pm -2am",closed:"Tuesday closed",phone:"+1 212-406-0400",must_try:"Spicy Prawn Dumpling,Kung Pao Squids,Chicken and Coriander Dumplings,Blue Jacket,White Lady",category:"bar",website:"https://www.apothekemixology.com/",image:"https://i.pinimg.com/originals/67/a4/52/67a452db69553966eb597ad476b439f7.jpg")
royalty=Restaurant.create(name:"The Royalton Park Ave Rooftop Lounge & Pool",cuisine:"American",cost:"$$$$",address:" 420 Park Ave S, New York, NY 10016, United States",hours:"7pm-3am",closed:"Monday-Thursday",phone:"+1 212-602-3202",must_try:"Caipirinha with Candy Floss,The Midnight Mary",category:"bar",website:"https://www.royaltonparkavenue.com/eat-and-drink/",image:"https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/14/36/1436082_v7.jpeg")

#puts "Done res"


#Review
Review.create(img:"https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Fc54907276a7cb6e0545ae2128bdc984e86b6cb9d",r:"Loved the alfredo chicken pasta.The chicken was roasted to perfection.Rose Wine along with just made it better.",restaurant_id:daniel.id,user_id: hannah.id)
Review.create(img:"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Italian-Hot-Dish_EXPS_HCK19_31288_B08_24_2b.jpg",r:"The cheddar in Arabiatta mushrrom lasagne was just heaven. Do try some amazing macroons",restaurant_id:daniel.id,user_id:joe.id)
Review.create(img:"https://static.toiimg.com/photo/88489342.cms",r:"Felt like I was in Seoul.The food was just fabulous.Thanks to Justin for the good service.",restaurant_id: ksh.id,user_id: selena.id)

puts "Done review"
#Reservations
Reservation.create(name:"Hannah & Joe", date:"30/09/2022",time:"1pm",num:2,contact:123456789,occasion:"Anniversary Party",restaurant_id:ksh.id,user_id:joe.id)

puts "Done reser"
puts "Done seeding"