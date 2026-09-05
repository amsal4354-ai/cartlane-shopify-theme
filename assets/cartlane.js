document.addEventListener('DOMContentLoaded',()=>{
  const wishlistKey='cartlane:wishlist';
  const getWishlist=()=>{try{return JSON.parse(localStorage.getItem(wishlistKey)||'[]')}catch{return[]}};
  const saveWishlist=(items)=>localStorage.setItem(wishlistKey,JSON.stringify(items));
  document.querySelectorAll('[data-wishlist]').forEach(button=>{
    const handle=button.dataset.wishlist;
    const sync=()=>{const saved=getWishlist().includes(handle);button.classList.toggle('is-saved',saved);button.setAttribute('aria-pressed',String(saved));};
    button.addEventListener('click',()=>{const items=getWishlist();const next=items.includes(handle)?items.filter(item=>item!==handle):[...items,handle];saveWishlist(next);sync();});sync();
  });
  document.querySelectorAll('[data-menu-toggle]').forEach(button=>button.addEventListener('click',()=>document.querySelector('[data-mobile-menu]')?.classList.toggle('is-open')));
  document.querySelectorAll('[data-gallery-thumb]').forEach(button=>button.addEventListener('click',()=>{const image=document.querySelector('[data-gallery-main]');if(image){image.src=button.dataset.galleryThumb;document.querySelectorAll('[data-gallery-thumb]').forEach(item=>item.classList.remove('active'));button.classList.add('active');}}));
  document.querySelectorAll('[data-quantity]').forEach(wrapper=>{const input=wrapper.querySelector('input');wrapper.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{const direction=button.dataset.direction;const value=Math.max(1,Number(input.value||1)+(direction==='up'?1:-1));input.value=value;}));});
});
