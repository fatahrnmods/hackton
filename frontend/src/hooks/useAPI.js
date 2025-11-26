import { useState, useCallback } from 'react';

export const useCompatibilityCheck = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const check = useCallback(async (components) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/compatibility/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ components })
      });
      const data = await response.json();
      setResult(data.compatibility);
      return data.compatibility;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { check, loading, error, result };
};

export const useNearestStores = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stores, setStores] = useState([]);

  const find = useCallback(async (latitude, longitude) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/stores/nearest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latitude, longitude })
      });
      const data = await response.json();
      setStores(data.stores);
      return data.stores;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { find, loading, error, stores };
};

export const useAIConsultant = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);

  const sendMessage = useCallback(async (message) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/consultant/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, context: { history: messages } })
      });
      const data = await response.json();
      setMessages([...messages, { user: message, assistant: data.response.message }]);
      return data.response;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [messages]);

  return { sendMessage, loading, error, messages };
};
