import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "../styles/build.css";

const COMPONENTS = [
  {
    key: "processor",
    label: "Processor",
    options: [
      { name: "Intel Core i3-12100F", price: 9500, series: "Intel Core i3", gpuType: "Intel" },
      { name: "Intel Core i5-12400F", price: 15000, series: "Intel Core i5", gpuType: "Intel" },
      { name: "Intel Core i7-12700K", price: 30000, series: "Intel Core i7", gpuType: "Intel" },
      { name: "AMD Ryzen 3 4100", price: 8000, series: "AMD Ryzen 3", gpuType: "AMD" },
      { name: "AMD Ryzen 5 5600X", price: 16000, series: "AMD Ryzen 5", gpuType: "AMD" },
      { name: "AMD Ryzen 7 5800X", price: 28000, series: "AMD Ryzen 7", gpuType: "AMD" },
    ],
  },
  {
    key: "platform",
    label: "Platform",
    options: [
      { name: "Intel LGA1700", price: 3500 },
      { name: "AMD AM4", price: 3200 },
      { name: "AMD AM5", price: 3800 },
    ],
  },
  {
    key: "gpuType",
    label: "GPU Type",
    options: [
      { name: "NVIDIA GeForce", price: 100, type: "NVIDIA" },
      { name: "AMD Radeon", price: 120, type: "AMD" },
    ],
  },
  {
    key: "processorSeries",
    label: "Processor Series",
    options: [
      { name: "Intel Core i3", price: 9500, type: "Intel" },
      { name: "Intel Core i5", price: 15000, type: "Intel" },
      { name: "Intel Core i7", price: 30000, type: "Intel" },
      { name: "AMD Ryzen 3", price: 8000, type: "AMD" },
      { name: "AMD Ryzen 5", price: 16000, type: "AMD" },
      { name: "AMD Ryzen 7", price: 28000, type: "AMD" },
    ],
  },
  {
    key: "processorModel",
    label: "Processor Model",
    options: [
      { name: "12100F", price: 9500 },
      { name: "12400F", price: 15000 },
      { name: "12700K", price: 30000 },
      { name: "4100", price: 8000 },
      { name: "5600X", price: 16000 },
      { name: "5800X", price: 28000 },
    ],
  },
  {
    key: "chipset",
    label: "Chipset",
    options: [
      { name: "Intel B660", price: 9000 },
      { name: "Intel Z690", price: 18000 },
      { name: "AMD B550", price: 9500 },
      { name: "AMD X570", price: 14000 },
    ],
  },
  {
    key: "ram",
    label: "RAM",
    options: [
      { name: "8GB DDR4 3200MHz", price: 2200 },
      { name: "16GB DDR4 3200MHz", price: 4000 },
      { name: "32GB DDR4 3200MHz", price: 7500 },
      { name: "16GB DDR5 5200MHz", price: 6500 },
      { name: "32GB DDR5 5200MHz", price: 12000 },
    ],
  },
  {
    key: "gpu",
    label: "GPU",
    options: [
      { name: "NVIDIA GTX 1650", price: 12000, type: "NVIDIA" },
      { name: "NVIDIA RTX 3050", price: 21000, type: "NVIDIA" },
      { name: "NVIDIA RTX 3060", price: 35000, type: "NVIDIA" },
      { name: "NVIDIA RTX 4060", price: 41000, type: "NVIDIA" },
      { name: "AMD RX 6500 XT", price: 16000, type: "AMD" },
      { name: "AMD RX 6600", price: 30000, type: "AMD" },
      { name: "AMD RX 7600", price: 38000, type: "AMD" },
    ],
  },
  {
    key: "cooler",
    label: "Cooler",
    options: [
      { name: "Stock Cooler", price: 1000 },
      { name: "Deepcool Gammaxx 400", price: 1600 },
      { name: "Cooler Master Hyper 212", price: 2500 },
      { name: "Corsair H60 Liquid", price: 4800 },
      { name: "NZXT Kraken X53", price: 9500 },
    ],
  },
  {
    key: "storage",
    label: "Storage",
    options: [
      { name: "240GB SATA SSD", price: 1500 },
      { name: "500GB SATA SSD", price: 2500 },
      { name: "1TB SATA SSD", price: 4000 },
      { name: "500GB NVMe SSD", price: 3200 },
      { name: "1TB NVMe SSD", price: 6000 },
      { name: "2TB HDD", price: 3500 },
      { name: "4TB HDD", price: 6500 },
    ],
  },
  {
    key: "powerSupply",
    label: "Power Supply",
    options: [
      { name: "450W Bronze", price: 2200 },
      { name: "550W Bronze", price: 3000 },
      { name: "650W Bronze", price: 3700 },
      { name: "750W Gold", price: 6200 },
      { name: "850W Gold Modular", price: 9500 },
    ],
  },
  {
    key: "cabinet",
    label: "Cabinet",
    options: [
      { name: "Ant Esports ICE-200TG", price: 2700 },
      { name: "NZXT H510", price: 6900 },
      { name: "Corsair 4000D", price: 7800 },
      { name: "Lian Li PC-O11 Dynamic", price: 12000 },
      { name: "Cooler Master TD500 Mesh", price: 9500 },
    ],
  },
];

const initialSelections = Object.fromEntries(
  COMPONENTS.map((c) => [c.key, null])
);

const Build = () => {
  const { addToCart } = useCart();
  const [open, setOpen] = useState({});
  const [selections, setSelections] = useState(initialSelections);
  const [gpuTypeFilter, setGpuTypeFilter] = useState(null);
  const [procSeriesFilter, setProcSeriesFilter] = useState(null);

  const filteredProcessors = COMPONENTS.find(c => c.key === 'processor').options.filter(p => {
    if (procSeriesFilter && p.series !== procSeriesFilter) return false;
    if (gpuTypeFilter && p.gpuType !== gpuTypeFilter) return false;
    return true;
  });

  const filteredGpus = COMPONENTS.find(c => c.key === 'gpu').options.filter(g => {
    if (gpuTypeFilter && g.type !== gpuTypeFilter) return false;
    return true;
  });

  const total = Object.entries(selections).map(([key, idx]) => {
    if (key === 'processor') {
      if (idx !== null) return filteredProcessors[idx]?.price || 0;
      return 0;
    } else if (key === 'gpu') {
      if (idx !== null) return filteredGpus[idx]?.price || 0;
      return 0;
    } else {
      const comp = COMPONENTS.find(c => c.key === key);
      if (comp && idx !== null) return comp.options[idx].price;
      return 0;
    }
  }).reduce((a, b) => a + b, 0);

  const handleSelectionChange = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value === '' ? null : Number(value) }));
  };

  const handleGpuTypeChange = (value) => {
    setGpuTypeFilter(value === '' ? null : value);
    setSelections(prev => ({ ...prev, gpu: null, processor: null }));
  };

  const handleProcSeriesChange = (value) => {
    setProcSeriesFilter(value === '' ? null : value);
    setSelections(prev => ({ ...prev, processor: null }));
  };

  const handleAddToCart = () => {
    COMPONENTS.forEach(comp => {
      let idx = selections[comp.key];
      if (comp.key === 'processor') {
        if (idx !== null) {
          const option = filteredProcessors[idx];
          if (option) {
            addToCart({ id: `${comp.key}-${option.name}`, name: `${comp.label}: ${option.name}`, price: option.price, image: "" });
          }
        }
      } else if (comp.key === 'gpu') {
        if (idx !== null) {
          const option = filteredGpus[idx];
          if (option) {
            addToCart({ id: `${comp.key}-${option.name}`, name: `${comp.label}: ${option.name}`, price: option.price, image: "" });
          }
        }
      } else {
        if (idx !== null) {
          const option = comp.options[idx];
          addToCart({ id: `${comp.key}-${option.name}`, name: `${comp.label}: ${option.name}`, price: option.price, image: "" });
        }
      }
    });
    alert("Selected items added to cart!");
  };

  return (
    <div className="build-page">
      <h2>Build Your Own PC</h2>
      <div className="build-categories">
        <div className="category">
          <div className="category-header">GPU Type</div>
          <div className="category-dropdown">
            <select value={gpuTypeFilter || ""} onChange={e => handleGpuTypeChange(e.target.value)}>
              <option value="">Choose any one...</option>
              {COMPONENTS.find(c => c.key === 'gpuType').options.map((option) => (
                <option key={option.name} value={option.type}>
                  {option.name} - ₹{option.price}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="category">
          <div className="category-header">Processor Series</div>
          <div className="category-dropdown">
            <select value={procSeriesFilter || ""} onChange={e => handleProcSeriesChange(e.target.value)}>
              <option value="">Choose any one...</option>
              {COMPONENTS.find(c => c.key === 'processorSeries').options
                .filter(opt => !gpuTypeFilter || opt.type === gpuTypeFilter)
                .map((option) => (
                  <option key={option.name} value={option.name}>
                    {option.name} - ₹{option.price}
                  </option>
                ))}
            </select>
          </div>
        </div>
        {COMPONENTS.filter(c => c.key !== 'gpuType' && c.key !== 'processorSeries').map(comp => (
          <div className="category" key={comp.key}>
            <div className="category-header" onClick={() => setOpen(prev => ({ ...prev, [comp.key]: !prev[comp.key] }))}>
              <span>{comp.label}</span>
              <span>{open[comp.key] ? "▲" : "▼"}</span>
            </div>
            {open[comp.key] && (
              <div className="category-dropdown">
                <select
                  value={selections[comp.key] ?? ""}
                  onChange={e => handleSelectionChange(comp.key, e.target.value)}
                >
                  <option value="">Choose any one...</option>
                  {(comp.key === 'processor' ? filteredProcessors : comp.key === 'gpu' ? filteredGpus : comp.options).map((option, idx) => (
                    <option key={option.name} value={idx}>
                      {option.name} - ₹{option.price}
                    </option>
                  ))}
                </select>
                {selections[comp.key] !== null && (
                  <div className="selected-price">
                    Price: ₹{(comp.key === 'processor' ? filteredProcessors : comp.key === 'gpu' ? filteredGpus : comp.options)[selections[comp.key]].price}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="build-summary">
        <h3>Total: ₹{total}</h3>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
      <div className="assistance">
        Need Assistance? <a href="tel:+916369933507">+91-6369933507</a>
      </div>
    </div>
  );
};

export default Build;
