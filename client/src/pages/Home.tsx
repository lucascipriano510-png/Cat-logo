'use client';

import { useEffect, useState } from 'react';
import { ShoppingBag, MapPin, Clock, X, CheckCircle2, ArrowRight, ZoomIn } from 'lucide-react';
import { trpc } from '@/lib/trpc';

const WHATSAPP_URL = 'https://wa.me/5534984148067?text=Quero%20receber%202%20looks%20em%20casa';

// Product catalog data
const PRODUCTS = [
  {
    id: 1,
    name: 'Camiseta Branca',
    price: 89.90,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/piece-camiseta-branca-BVFQwW3N3sGJ72UCoekda8.webp',
    category: 'Camisetas',
    sku: 'CAM-BRA-001',
  },
  {
    id: 2,
    name: 'Jaqueta Preta Premium',
    price: 349.90,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/piece-jaqueta-preta-fVmQxyi8x3p3YLbfTAYwtX.webp',
    category: 'Jaquetas',
    sku: 'JAQ-PRT-001',
  },
  {
    id: 3,
    name: 'Calça Jogador',
    price: 169.90,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/IMG_3456_1b4bd766.jpeg',
    category: 'Calças',
    sku: 'CAL-JOG-001',
  },
  {
    id: 4,
    name: 'Hoodie Cinza',
    price: 129.90,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/piece-hoodie-cinza-PKeUxy8D8U5Nmbx9FTNXBX.webp',
    category: 'Hoodies',
    sku: 'HOO-CIN-001',
  },
  {
    id: 5,
    name: 'Sapato Branco',
    price: 249.90,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/piece-sapato-branco-2mjJdTTJ3cyMB8PcThkGku.webp',
    category: 'Sapatos',
    sku: 'SAP-BRA-001',
  },
  {
    id: 6,
    name: 'Camisa Preta',
    price: 119.90,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/piece-camisa-preta-4GSjr3gTRhVZqAhabcbfZb.webp',
    category: 'Camisas',
    sku: 'CAM-PRT-001',
  },
  {
    id: 7,
    name: 'Calça Cinza Chino',
    price: 139.90,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/piece-calca-cinza-LrDVdotSfaLHWeTCMQmQ7e.webp',
    category: 'Calças',
    sku: 'CAL-CIN-001',
  },
  {
    id: 8,
    name: 'Jaqueta Bomber',
    price: 279.90,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/piece-jaqueta-bomber-cNvhZ4maLoPeuhCXdRph5Z.webp',
    category: 'Jaquetas',
    sku: 'JAQ-BOM-001',
  },
  {
    id: 9,
    name: 'Jordan Red & Black',
    price: 299.90,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/tenis-jordan-red-black-3d-L2SMFicX44iaFSqoe8AChG.webp',
    category: 'Sapatos Premium',
    sku: 'TEN-JOR-001',
  },
  {
    id: 10,
    name: 'Camiseta Preta Gráfica',
    price: 99.90,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/piece-camiseta-preta-5jtJECURYZWmZQUYAwEKCs.webp',
    category: 'Camisetas',
    sku: 'CAM-GRA-001',
  },
];

interface CartItem {
  id: number;
  quantity: number;
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const createOrderMutation = trpc.orders.create.useMutation();

  // Calculate cart totals
  const cartItems = cart
    .map(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter((item): item is any => item !== null);

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { id: productId, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const handleCheckout = async () => {
    // Build message with cart items including SKU and image links
    const itemsList = cartItems
      .map(item => `📦 ${item.name}%0A   SKU: ${item.sku}%0A   Quantidade: ${item.quantity}%0A   Preço: R$ ${(item.price * item.quantity).toFixed(2)}%0A   👉 Foto: ${item.image}`)
      .join('%0A%0A');
    
    const message = `Olá! Gostaria de receber os seguintes looks:%0A%0A${itemsList}%0A%0ATotal: R$ ${cartTotal.toFixed(2)}%0A%0A* Vou pagar só o que ficar`;
    
    // Save order to database
    try {
      await createOrderMutation.mutateAsync({
        whatsappPhone: '5534984148067',
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          sku: item.sku,
          image: item.image,
        })),
        totalPrice: cartTotal,
      });
      
      setShowSuccess(true);
      setTimeout(() => {
        const whatsappUrl = `https://wa.me/5534984148067?text=${message}`;
        window.location.href = whatsappUrl;
      }, 2000);
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
      // Redireciona para WhatsApp mesmo se houver erro
      const whatsappUrl = `https://wa.me/5534984148067?text=${message}`;
      window.location.href = whatsappUrl;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-32">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#ff6b00]/20 py-4">
        <div className="container flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-[#ffd700]">Fluxo</h1>
            <p className="text-xs text-gray-400">Moda em 2 horas</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-[#ff6b00]" />
              <span>Uberaba</span>
            </div>
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative p-2 hover:bg-[#ff6b00]/10 rounded-lg transition-colors"
            >
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-[#ff6b00] rounded-full flex items-center justify-center text-xs font-black">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* HERO MINI */}
      <section className="py-8 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-2">
            Escolha. <span className="text-[#ff6b00]">Receba.</span> Pague.
          </h2>
          <p className="text-gray-400">Selecione as peças que você ama e receba em até 2 horas</p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            {PRODUCTS.map((product, idx) => (
              <div
                key={product.id}
                className="cursor-pointer animate-fade-in-up"
                style={{
                  animationDelay: `${idx * 50}ms`,
                }}
              >
                <div className="relative mb-3 overflow-hidden rounded-lg bg-[#1a1a1a] aspect-square group">
                  {/* Image - toque abre lightbox */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer active:scale-95 sm:active:scale-100"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedImage(product.image);
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedImage(product.image);
                    }}
                  />

                  {/* Overlay on hover - desktop only */}
                  <div className="absolute inset-0 bg-[#0a0a0a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex flex-col items-center justify-center gap-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddToCart(product.id);
                      }}
                      className="px-4 py-2 bg-[#ff6b00] text-[#0a0a0a] rounded-lg font-black text-sm hover:bg-[#ffd700] transition-colors"
                    >
                      + Adicionar
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedImage(product.image);
                      }}
                      className="px-3 py-2 bg-[#ffd700]/20 text-[#ffd700] rounded-lg font-black text-xs hover:bg-[#ffd700]/30 transition-colors flex items-center gap-1"
                    >
                      <ZoomIn size={14} />
                      Ampliar
                    </button>
                  </div>

                  {/* Price badge */}
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-[#ff6b00] text-[#0a0a0a] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-black">
                    R$ {product.price.toFixed(2)}
                  </div>
                </div>

                {/* Product info + Mobile Add Button */}
                <div className="space-y-2">
                  <div>
                    <h3 className="font-black text-xs sm:text-sm line-clamp-2">{product.name}</h3>
                    <p className="text-xs text-gray-400 line-clamp-1">{product.category}</p>
                  </div>
                  {/* Add button for mobile */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleAddToCart(product.id);
                    }}
                    className="w-full sm:hidden py-2 px-2 bg-[#ff6b00] text-[#0a0a0a] rounded-lg font-black text-xs hover:bg-[#ffd700] transition-colors"
                  >
                    + Adicionar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOATING CART BUTTON */}
      {cartCount > 0 && !showCart && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-8 right-8 px-6 py-3 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] rounded-full font-black text-[#0a0a0a] shadow-2xl hover:shadow-[0_0_40px_#ff6b00] transition-all duration-300 border-2 border-[#ffd700] flex items-center gap-3 animate-bounce"
        >
          <ShoppingBag size={20} />
          <span>{cartCount} itens</span>
          <ArrowRight size={16} />
        </button>
      )}

      {/* CART MODAL */}
      {showCart && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm flex items-end md:items-center justify-center p-4">
          <div className="bg-[#1a1a1a] rounded-t-2xl md:rounded-2xl w-full md:max-w-md max-h-[90vh] overflow-y-auto border border-[#ff6b00]/20">
            {/* Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-[#ff6b00]/20 bg-[#0a0a0a]">
              <h3 className="text-xl font-black">Seu Carrinho</h3>
              <button
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-[#ff6b00]/10 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="p-6 space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-400 py-8">Seu carrinho está vazio</p>
              ) : (
                cartItems.map((item: any) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-[#0a0a0a] rounded-lg border border-[#ff6b00]/10">
                    <div className="flex-1">
                      <p className="font-black text-sm">{item.name}</p>
                      <p className="text-[#ff6b00] font-black text-xs">
                        R$ {item.price.toFixed(2)} x {item.quantity}
                      </p>
                      <p className="text-gray-400 text-xs">
                        Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="p-1 hover:bg-red-500/20 rounded text-red-400 transition-colors"
                      >
                        −
                      </button>
                      <span className="w-6 text-center font-black">{item.quantity}</span>
                      <button
                        onClick={() => handleAddToCart(item.id)}
                        className="p-1 hover:bg-[#ff6b00]/20 rounded text-[#ff6b00] transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Total */}
            {cartItems.length > 0 && (
              <div className="sticky bottom-0 p-6 border-t border-[#ff6b00]/20 bg-[#0a0a0a] space-y-4">
                <div className="flex items-center justify-between text-lg font-black">
                  <span>Total:</span>
                  <span className="text-[#ff6b00]">R$ {cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-400 text-center">* Você paga só o que ficar</p>
                <button
                  onClick={() => {
                    setShowCart(false);
                    setShowCheckout(true);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] rounded-lg font-black text-[#0a0a0a] hover:shadow-[0_0_40px_#ff6b00] transition-all duration-300"
                >
                  Continuar
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CHECKOUT MODAL */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] rounded-2xl w-full max-w-md border border-[#ff6b00]/20 p-8 space-y-6">
            {/* Header */}
            <div className="text-center">
              <h3 className="text-2xl font-black mb-2">Confirmar Entrega</h3>
              <p className="text-gray-400">Últimas informações antes de enviar</p>
            </div>

            {/* Info */}
            <div className="space-y-4">
              <div className="p-4 bg-[#0a0a0a] rounded-lg border border-[#ff6b00]/20">
                <p className="text-xs text-gray-400 mb-1">Localização</p>
                <p className="font-black flex items-center gap-2">
                  <MapPin size={16} className="text-[#ff6b00]" />
                  Uberaba
                </p>
              </div>

              <div className="p-4 bg-[#0a0a0a] rounded-lg border border-[#ff6b00]/20">
                <p className="text-xs text-gray-400 mb-1">Tempo de entrega</p>
                <p className="font-black flex items-center gap-2">
                  <Clock size={16} className="text-[#ff6b00]" />
                  Até 2 horas
                </p>
              </div>

              <div className="p-4 bg-[#0a0a0a] rounded-lg border border-[#ff6b00]/20">
                <p className="text-xs text-gray-400 mb-1">Total de itens</p>
                <p className="font-black">{cartCount} peças selecionadas</p>
              </div>

              <div className="p-4 bg-[#0a0a0a] rounded-lg border border-[#ff6b00]/20">
                <p className="text-xs text-gray-400 mb-1">Valor total</p>
                <p className="font-black text-[#ff6b00] text-lg">R$ {cartTotal.toFixed(2)}</p>
                <p className="text-xs text-gray-400 mt-2">* Você paga só o que ficar</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowCheckout(false)}
                className="flex-1 py-3 bg-[#0a0a0a] rounded-lg font-black border border-[#ff6b00]/20 hover:border-[#ff6b00] transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={handleCheckout}
                className="flex-1 py-3 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] rounded-lg font-black text-[#0a0a0a] hover:shadow-[0_0_40px_#ff6b00] transition-all duration-300"
              >
                Enviar via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-[#1a1a1a] rounded-2xl w-full max-w-md border border-[#ffd700]/20 p-8 text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle2 size={64} className="text-[#ffd700] animate-scale-pulse" />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2">Perfeito!</h3>
              <p className="text-gray-400">Abrindo WhatsApp para confirmar seu pedido...</p>
            </div>
          </div>
        </div>
      )}

      {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Ampliar"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-[#ff6b00] hover:bg-[#ffd700] rounded-lg transition-colors"
            >
              <X size={24} className="text-[#0a0a0a]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
