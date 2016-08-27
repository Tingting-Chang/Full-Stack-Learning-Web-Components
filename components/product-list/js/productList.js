window.addEventListener('load', function (event) {
	// Get all elements
	var oProductList = document.getElementById('productList'),
		oProducts = oProductList.getElementsByTagName('ul')[0],
		oLis = oProducts.getElementsByTagName('li'),
		oAddBtn = oProducts.getElementsByClassName('add'),
		oShopCart = document.getElementsByClassName('shopCart')[0],
		oCartList = oShopCart.getElementsByClassName('cartList'),
		promoText = document.getElementsByClassName('promo')[0];
		promoAdd = document.getElementsByClassName('addPromo')[0],
		cartShow = document.getElementById('cartShow');

	var data = {};
	

	function Item(src, price, quantity) {
		this.name = src;
		this.price = price;
		this.quantity = quantity;
		this.subTotal = quantity*price;
	}

	cartShow.onclick = function () {
		if (oShopCart.style.display === 'block') {
			oShopCart.style.display = 'none';
		} else {
			oShopCart.style.display = 'block';
		}
	}

	function addRemove() {
		var total = {},
			src,
			total = 0
			list = [];
			


		for (var i = 0; i < oAddBtn.length; i++) {
			oAddBtn[i].addEventListener('click', function (event) {
				var clone = this.parentNode.cloneNode(true),
					oUl = document.getElementsByClassName('inCart')[0],
					oRemoveBtn = clone.querySelector('.add');

				var oQuantity = clone.getElementsByClassName('quantity')[0],
				oTotalPrice = document.getElementById('total'),
				totalPrice = 0,
				quantity = 0,
				price = 0;


				// change add button to remove button
				oShopCart.style.display = 'block';
				oRemoveBtn.setAttribute('name', 'remove');
				oRemoveBtn.setAttribute('value', 'Remove from cart');
				oRemoveBtn.setAttribute('class', 'remove');

				oUl.appendChild(clone);


				// update total price when add one item
				src = clone.childNodes[1].src;
				price =  parseFloat(clone.getElementsByClassName('price')[0].innerHTML.substr(2)).toFixed(2);
				quantity = parseInt(oQuantity.value.substr(3)).toFixed(2);

				var item = new Item(src, price, quantity);
				list.push(item);

				total += item['subTotal'];
				oTotalPrice.innerHTML = 'Total: $' + total;
				console.log(total);
				console.log(list[0]);


			oRemoveBtn.onclick = function () {
					var parent = this.parentNode.parentNode;
					parent.removeChild(this.parentNode);
					var src = this.parentNode.getElementsByTagName('img')[0].src;
					for (var i = 0; i < list.length; i++) {
						if (list[i].name === src) {
							console.log(list[i].name);
							total -= list[i].subTotal;
							oTotalPrice.innerHTML = 'Total: $' + total.toFixed(2);
							list.splice(i, 1);
							i--;
							console.log(list.length);
						}
					}
				}

			oQuantity.addEventListener('change', function () {
				if (this.value === "QTY0") {
					this.parentNode.parentNode.remove();
					var src = this.parentNode.parentNode.getElementsByTagName('img')[0].src;
					for (var i = 0; i < list.length; i++) {
						if (list[i].name === src) {
							console.log(list[i].name);
							total -= list[i].subTotal;
							oTotalPrice.innerHTML = 'Total: $' + total.toFixed(2);
							list.splice(i, 1);
							i--;
							console.log(list.length);
						}
					}

				}
			}, false);

			promoAdd.addEventListener('click', function () {
				var final = 0;

				if (promoText.value === 'BIGSALE') {
					for (var i = 0; i < list.length; i++) {
						final += list[i].subTotal * 0.9;
					}
					oTotalPrice.innerHTML = 'Total: $' + final.toFixed(2);
					console.log(final);
				} else if (promoText.value === 'MEMBERSHIP') {
					oTotalPrice.innerHTML = 'Total: $' + (total * 0.9).toFixed(2);
				}

			})


			}, false)
		} 
	}



	addRemove();


	event.preventDefault();

})