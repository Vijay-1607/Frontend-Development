import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../hooks/useShop';
import { User, LogOut, Package, CreditCard, Calendar, Edit2, CheckCircle, Clock } from 'lucide-react';
import './Profile.css';

export const Profile = () => {
  const { user, logout, orders, updateProfile } = useShop();
  const navigate = useNavigate();

  // --- Auth Redirect ---
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // --- States ---
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Load user data into local states when loaded
  useEffect(() => {
    if (user) {
      setName(user.name);
      setPhone(user.phone || '');
      setAddress(user.address || '');
    }
  }, [user]);

  if (!user) {
    return null; // Will redirect in useEffect
  }

  // Handle Profile Update Save
  const handleSave = (e) => {
    e.preventDefault();
    updateProfile({ name, phone, address });
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="profile-page container">
      {/* Header */}
      <div className="profile-header text-left">
        <h1 className="profile-title">User Account</h1>
        <p className="profile-subtitle">Manage details and view purchase records</p>
      </div>

      <div className="profile-layout-grid">
        {/* Left Column: User Profile Details card */}
        <aside className="profile-details-column">
          <div className="profile-details-card glass-card text-left">
            <div className="profile-avatar-block">
              <div className="profile-large-avatar">
                <img src={user.avatar} alt={user.name} />
              </div>
              <h3 className="profile-name">{user.name}</h3>
              <p className="profile-joined">Member since {user.joined}</p>
            </div>

            {saveSuccess && (
              <div className="save-success-toast">
                <CheckCircle size={14} /> Profile updated successfully!
              </div>
            )}

            {isEditing ? (
              /* Profile Edit Form */
              <form onSubmit={handleSave} className="profile-edit-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="edit-name">Name</label>
                  <input
                    id="edit-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="edit-phone">Phone</label>
                  <input
                    id="edit-phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="edit-address">Delivery Address</label>
                  <textarea
                    id="edit-address"
                    rows="3"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-input textarea-input"
                  />
                </div>
                <div className="profile-form-actions">
                  <button 
                    type="button" 
                    onClick={() => setIsEditing(false)} 
                    className="btn btn-outline btn-sm"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              /* Profile Info Display */
              <div className="profile-info-display">
                <div className="profile-info-row">
                  <span className="info-label">Email:</span>
                  <span className="info-value">{user.email}</span>
                </div>
                <div className="profile-info-row">
                  <span className="info-label">Phone:</span>
                  <span className="info-value">{user.phone || 'Not added'}</span>
                </div>
                <div className="profile-info-row">
                  <span className="info-label">Address:</span>
                  <span className="info-value">{user.address || 'Not added'}</span>
                </div>

                <div className="profile-actions-panel">
                  <button 
                    onClick={() => setIsEditing(true)} 
                    className="btn btn-secondary w-full edit-profile-btn"
                  >
                    <Edit2 size={14} /> Edit Profile
                  </button>

                  <button 
                    onClick={handleLogout} 
                    className="btn btn-outline w-full logout-btn"
                  >
                    <LogOut size={14} /> Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Right Column: Order History list */}
        <main className="profile-orders-column text-left">
          <h2 className="orders-section-title"><Package size={20} /> Order History ({orders.length})</h2>

          {orders.length === 0 ? (
            /* Empty Orders state */
            <div className="empty-orders-card glass-card text-center">
              <Package size={48} className="empty-orders-icon" />
              <h3>No Orders Placed Yet</h3>
              <p>Your purchase records will appear here after checkout.</p>
            </div>
          ) : (
            /* List of Orders */
            <div className="orders-list">
              {orders.map((order) => (
                <div key={order.id} className="order-item-card glass-card">
                  {/* Order Top Panel */}
                  <div className="order-meta-header">
                    <div className="meta-left">
                      <span className="order-meta-id">Order ID: <strong>{order.id}</strong></span>
                      <div className="meta-dates">
                        <span className="meta-date"><Calendar size={14} /> {order.date}</span>
                        <span className="meta-total"><CreditCard size={14} /> ${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <span className="badge badge-success">
                      <Clock size={12} style={{ marginRight: '4px' }} /> {order.status}
                    </span>
                  </div>

                  {/* Order Items list */}
                  <div className="order-products-list">
                    {order.items.map((item, index) => (
                      <div key={index} className="order-product-row">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="order-product-thumbnail" 
                        />
                        <div className="order-product-info">
                          <Link to={`/products/${item.product.id}`} className="order-item-link">
                            <h4 className="order-product-name">{item.product.name}</h4>
                          </Link>
                          <span className="order-product-meta">
                            Category: {item.product.category}
                          </span>
                        </div>
                        <div className="order-product-price-block">
                          <span>Qty: {item.quantity}</span>
                          <strong>${(item.product.price * item.quantity).toFixed(2)}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Profile;
