import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const Top = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Debounce input
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query.trim()), 400);
    return () => clearTimeout(handler);
  }, [query]);

  // Trigger search on debounced input
  useEffect(() => {
    if (debouncedQuery) {
      setSelectedCity(debouncedQuery);
      if (onSearch) onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSelectedCity(query.trim());
      onSearch(query.trim());
      setQuery("");
    }
  };

  return (
    <header className="flex flex-col items-center mb-10 gap-4">
      <motion.form
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onSubmit={handleSearch}
        className="flex items-center w-full max-w-lg bg-purple-700/20 border border-purple-500 rounded-full backdrop-blur-sm shadow-lg overflow-hidden transform hover:scale-[1.03] transition-transform duration-500"
      >
        <motion.div
          className="flex items-center flex-grow px-5 py-3"
          whileFocus={{ scale: 1.02 }}
        >
          <motion.div
            className="text-purple-200 mr-3 text-lg"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <FaSearch />
          </motion.div>
          <input
            type="search"
            placeholder="Search City..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow bg-transparent focus:outline-none text-white placeholder-purple-300 text-lg"
            autoComplete="off"
          />
          {query && (
            <motion.button
              type="button"
              onClick={() => setQuery("")}
              className="text-purple-300 hover:text-white ml-2 transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
          )}
        </motion.div>
        <motion.button
          type="submit"
          disabled={!query.trim()}
          whileHover={{ scale: 1.05, backgroundColor: "#9f7aea" }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 font-semibold rounded-full disabled:opacity-50 transition-colors duration-200"
        >
          Search
        </motion.button>
      </motion.form>

      <AnimatePresence>
        {selectedCity && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-white font-medium text-lg flex items-center gap-2"
          >
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              🔍
            </motion.span>
            Showing results for: <span className="font-semibold">{selectedCity}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Top;
